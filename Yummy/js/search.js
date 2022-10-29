'use strict'
let innerBoxWidth = $("#innerBox").outerWidth(); 
let navleft = $("#outerBox").css("left");

let data;
let categData;
let categResponse;
let ingredId;

$(document).ready(()=>{
   
    $("#closeIcon" ).click(function() {
        navleft = $("#outerBox").css("left");
         if (navleft == "0px") {
            $("#sideBox").animate({left : `${innerBoxWidth}px`}, 500);
            navleft = $("#outerBox").animate({left : `${innerBoxWidth}px` },500);
            $("#closeIcon").removeClass("fa-bars").addClass("fa-xmark");
         } else {
             $("#sideBox").animate({left:  `0px`} ,500);
             navleft = $("#outerBox").animate({left: `0px`} ,500);
             $("#closeIcon").removeClass("fa-xmark").addClass("fa-bars");
         }  
    });


$("#searchMealName").change(async function () {
    let searchValue = $("#searchMealName").val();
    console.log(searchValue);
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    );
    let myData = await response.json();
    data = myData.meals;
    var temp = "";
    for (var i = 0; i < data.length; i++) {
      temp += `<div class="col-md-6 col-lg-3">
            <div class="home-meal overflow-hidden position-relative">
          <img src="${data[i].strMealThumb}" class="w-100 rounded" alt="" srcset="">
          <div class="over-lay d-flex align-items-center">
              <div class="meal-info ps-2">
                  <h2 class="fw-light">${data[i].strMeal}</h2>
              </div>
          </div>
      </div>
  </div>`;
    }
    document.getElementById("searchContainer").innerHTML = temp;

    $(".homeMeal").click(async function () {
      ingredId = $(this).text().trim().split(" ");
      console.log(ingredId[0]);
      let categResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredId[0]}`
      );
      var myIngredata = await categResponse.json();
      let indexs = "";
      for (var i = 0; i < 1; i++) {
        indexs += `<div class="ingreMeal row mt-3">
        <a href="" class="col-4">
            <img src="${myIngredata.meals[i].strMealThumb}" alt="" class="w-100 rounded-2">
            <h2 class="text-white text-capitalize text-center mt-2 fs-1">${myIngredata.meals[i].strMeal}</h2>
        </a>
        <div class="ingrelist col-8 text-white">
            <h2 class="ingreText text-capitalize">instructions</h2>
            <p class="ingreDiscrp  text-capitalize">${myIngredata.meals[i].strInstructions}</p>
            <p class="fw-bold">Area : <span class="fw-normal">${myIngredata.meals[i].strArea}</span></p>
            <p class="fw-bold">category : <span class="fw-normal">${myIngredata.meals[i].strCategory}</span></p>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="ingrelist col-8 text-white justify-content-end">
            <h2 class="ingreText text-capitalize">recipes :</h2>
            <ul class="recipesList row ms-0 ps-0 mt-4 pe-5 flex-wrap">
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient1} ${myIngredata.meals[i].strMeasure1}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient2} ${myIngredata.meals[i].strMeasure2}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient3} ${myIngredata.meals[i].strMeasure3}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient4} ${myIngredata.meals[i].strMeasure4}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient5} ${myIngredata.meals[i].strMeasure5}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient6} ${myIngredata.meals[i].strMeasure6}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient7} ${myIngredata.meals[i].strMeasure7}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient8} ${myIngredata.meals[i].strMeasure8}</li>
  
            </ul>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="taglist col-8 text-white justify-content-end">
            <h2 class="ingreText text-capitalize my-4">tags :</h2>
            <p class="ingreText text-capitalize">${myIngredata.meals[i].strTags}</p>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="taglist col-8 text-white mt-3">
        <a href="${myIngredata.meals[i].strYoutube}">
        <button class="btn text-capitalize me-3" id="source">source</button>
    </a>
    <a href="${myIngredata.meals[i].strSource}">
        <button class="btn text-capitalize" id="youtube">youtube</button>
    </a>
        </div>
    </div>`;
      }
      document.getElementById("searchContainer").innerHTML = indexs;
    });
  });


$("#searchMealLetter").change(async function () {
    let searchLetterValue = $("#searchMealLetter").val();
    console.log(searchLetterValue);
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetterValue}`
    );
    let searchData = await response.json();
    let data = searchData.meals;
    var temp = "";
    for (var i = 0; i < data.length; i++) {
      temp += 
        `<div class="col-md-6 col-lg-3">
              <div class="home-meal overflow-hidden position-relative">
            <img src="${data[i].strMealThumb}" class="w-100 rounded" alt="" srcset="">
            <div class="over-lay d-flex align-items-center">
                <div class="meal-info ps-2">
                    <h2 class="fw-light">${data[i].strMeal}</h2>
                </div>
            </div>
        </div>
    </div>`;
    }
    document.getElementById("searchContainer").innerHTML = temp;
  
    $(".homeMeal").click(async function () {
      ingredId = $(this).text().trim().split(" ");
      console.log(ingredId[0]);
      let categResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredId[0]}`
      );
      var myIngredata = await categResponse.json();
      let indexs = "";
      for (var i = 0; i < 1; i++) {
        indexs += `<div class="ingreMeal row mt-3">
        <a href="" class="col-4">
            <img src="${myIngredata.meals[i].strMealThumb}" alt="" class="w-100 rounded-2">
            <h2 class="text-white text-capitalize text-center mt-2 fs-1">${myIngredata.meals[i].strMeal}</h2>
        </a>
        <div class="ingrelist col-8 text-white">
            <h2 class="ingreText text-capitalize">instructions</h2>
            <p class="ingreDiscrp  text-capitalize">${myIngredata.meals[i].strInstructions}</p>
            <p class="fw-bold">Area : <span class="fw-normal">${myIngredata.meals[i].strArea}</span></p>
            <p class="fw-bold">category : <span class="fw-normal">${myIngredata.meals[i].strCategory}</span></p>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="ingrelist col-8 text-white justify-content-end">
            <h2 class="ingreText text-capitalize">recipes :</h2>
            <ul class="recipesList row ms-0 ps-0 mt-4 pe-5 flex-wrap">
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient1} ${myIngredata.meals[i].strMeasure1}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient2} ${myIngredata.meals[i].strMeasure2}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient3} ${myIngredata.meals[i].strMeasure3}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient4} ${myIngredata.meals[i].strMeasure4}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient5} ${myIngredata.meals[i].strMeasure5}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient6} ${myIngredata.meals[i].strMeasure6}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient7} ${myIngredata.meals[i].strMeasure7}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient8} ${myIngredata.meals[i].strMeasure8}</li>
  
            </ul>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="taglist col-8 text-white justify-content-end">
            <h2 class="ingreText text-capitalize my-4">tags :</h2>
            <p class="ingreText text-capitalize">${myIngredata.meals[i].strTags}</p>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="taglist col-8 text-white mt-3">
        <a href="${myIngredata.meals[i].strYoutube}">
        <button class="btn text-capitalize me-3" id="source">source</button>
    </a>
    <a href="${myIngredata.meals[i].strSource}">
        <button class="btn text-capitalize" id="youtube">youtube</button>
    </a>
        </div>
    </div>`;
      }
      document.getElementById("searchContainer").innerHTML = indexs;
    });
});

});






