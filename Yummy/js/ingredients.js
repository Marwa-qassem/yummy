'use strict'
let innerBoxWidth = $("#innerBox").outerWidth(); 
let navleft = $("#outerBox").css("left");

let finalIngredient = "";
let CategIngred;
let finalIngredata = "";
let data;
let ingreId;
let categResponse;
let categName;
let categingre;
let categData;
let categDataIngred;
let arr;


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


async function ingredient() {
    let ingredientMain = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')

    let finalIngredient = await ingredientMain.json();
    let data = finalIngredient.meals;

    let ingredientCard ="";
    for (let i = 0; i < 20; i++) {
        ingredientCard += `
      
        <div class="col-md-6 col-lg-3">
        <div class="home-meal text-white">
            <img src="../imgs/ingred.png" class="w-25" alt="" srcset="">
            <h4 class="p-2">${data[i].strIngredient}</h4>
            <p class="p-2 fs-6">${data[i].strDescription.split(" ").splice(0,20).join(" ")}</p>
        </div>
    </div>`
    }
    document.getElementById("ingredientBase").innerHTML = ingredientCard;

    $(".home-meal").click(async function (e) {
        categName = e.target.innerText;
       let categResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${categName}`
        );
        categData = await categResponse.json();
        console.log(categData);
        let temp = "";
        for (var i = 0; i < categData.meals.length; i++) {
          temp +=` <div class="col-md-6 col-lg-3" >
          <div class="home-meal catMeal overflow-hidden position-relative">
              <img src="${CategIngred.meals[i].strMealThumb}"class="w-100 rounded" alt="" srcset="">
              <div class="over-lay d-flex align-items-center">
              <div class="meal-info p-2">
                  <h2 class="fw-light pt-2">${CategIngred.meals[i].strMeal}</h2>
              </div>
          </div>
          </div>
      </div>`;
        }
    
        document.getElementById("ingredientBase").innerHTML = temp;
      });
    
    $(".home-meal").click(async function (e) {

    categName = e.target.innerText;
    categResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${categName}`
    );
    categDataIngred = await categResponse.json();
    arr = categDataIngred.meals
    let temp = "";
    for (var i = 0; i < arr.length ; i++) {
        temp += `<div class=" col-md-3 col-sm-2 mt-3">
        <div class="home-meal catMeal overflow-hidden position-relative">
                <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded">
            <div class="over-lay d-flex align-items-center">
                <h2 class="recipText ">${arr[i].strMeal}</h2>
            </div>
        </div>
    </div>`;
    }
    document.getElementById("ingredientBase").innerHTML = temp;
    
    $(".recipMeal").click(async function () {
        ingreId = $(this).text().trim().split(" ");
        console.log(ingreId[0]);
    let  categResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingreId[0]}`
        );
        var myIngredata = await categResponse.json();
        let indexs = "";
        for (var i = 0; i < 1; i++) {
        indexs += `<div class="home-meal row mt-3">
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
        document.getElementById("ingredientBase").innerHTML = indexs;
    });
    });
}
ingredient();
