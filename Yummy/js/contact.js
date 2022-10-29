'use strict'
let innerBoxWidth = $("#innerBox").outerWidth(); 
let navleft = $("#outerBox").css("left");

let nameInput = document.querySelector("#nameInpt");
let emailInput = document.querySelector("#emailInpt");
let phoneInput = document.querySelector("#phoneInpt");
let ageInput = document.querySelector("#ageInpt");
let passwordInput = document.querySelector("#passwordInpt");
let repasswordInput = document.querySelector("#repasswordInpt");

let nameAlert = document.querySelector("#nameAlert");
let emailAlert = document.querySelector("#emailAlert");
let phoneAlert = document.querySelector("#phoneAlert");
let ageAlert = document.querySelector("#ageAlert");
let passwordAlert = document.querySelector("#passwordAlert");
let repasswordAlert = document.querySelector("#repasswordAlert");


$("#closeIcon" ).click(function() {
    navleft = $("#outerBox").css("left");
        if (navleft == "0px") {
        $("#sideBox").animate({left : `${innerBoxWidth}px`}, 500);
        navleft = $("#outerBox").animate({left : `${innerBoxWidth}px` },500);
        $("#closeIcon").classList.remove("fa-bars").classList.add("fa-xmark");
        } else {
            $("#sideBox").animate({left:  `0px`} ,500);
            navleft = $("#outerBox").animate({left: `0px`} ,500);
            $("#closeIcon").classList.remove("fa-xmark").classList.add("fa-bars");
        }  
});


nameInput.addEventListener("blur", function () {
    let nameRegex = /^[A-Za-z]{3,12}$/;
    if (nameRegex.test(nameInput.value) == true) {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        nameAlert.classList.replace("d-block", "d-none")
        $("#submitBtn").prop("disabled", false)
    } else {
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        nameAlert.classList.replace("d-none","d-block")
        $("#submitBtn").prop("disabled", true)
    }
})

emailInput.addEventListener("blur", function () {
    let emailRegex =  /^[A-Za-z]{3,12}[0-9]?@[A-Za-z]{3,15}\.[A-Za-z]{2,3}$/;
    if (emailRegex.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailAlert.classList.replace("d-block", "d-none")
        $("#submitBtn").prop("disabled", false)
    } else {
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        emailAlert.classList.replace("d-none","d-block")
        $("#submitBtn").prop("disabled", true)
    }
})

ageInput.addEventListener("blur", function () {
    let ageRegex =  /^[1-9][0-9]$/;
    if (ageRegex.test(ageInput.value) == true) {
        ageInput.classList.add("is-valid");
        ageInput.classList.remove("is-invalid");
        ageAlert.classList.replace("d-block", "d-none")
        $("#submitBtn").prop("disabled", false)
    } else {
        ageInput.classList.remove("is-valid");
        ageInput.classList.add("is-invalid");
        ageAlert.classList.replace("d-none","d-block")
        $("#submitBtn").prop("disabled", true)
    }
})

phoneInput.addEventListener("blur", function () {
    let phoneRegex =  /^[0][1][0-9]{9}$/;
    if (phoneRegex.test(phoneInput.value) == true) {
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid");
        phoneAlert.classList.replace("d-block", "d-none")
        $("#submitBtn").prop("disabled", false)
    } else {
        phoneInput.classList.remove("is-valid");
        phoneInput.classList.add("is-invalid");
        phoneAlert.classList.replace("d-none","d-block")
        $("#submitBtn").prop("disabled", true)
    }
})


passwordInput.addEventListener("blur", function () {
    let passwordRegex =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$_-]).{8,15}$/;
    if (passwordRegex.test(passwordInput.value) == true) {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordAlert.classList.replace("d-block", "d-none")
        $("#submitBtn").prop("disabled", false)
    } else {
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        passwordAlert.classList.replace("d-none","d-block")
        $("#submitBtn").prop("disabled", true)
    }
})


repasswordInput.addEventListener("blur", function () {
    if (passwordInput.value == repasswordInput.value) {
        repasswordInput.classList.add("is-valid");
        repasswordInput.classList.remove("is-invalid");
        repasswordAlert.classList.replace("d-block", "d-none")
        $("#submitBtn").prop("disabled", false)
    } else {
        repasswordInput.classList.remove("is-valid");
        repasswordInput.classList.add("is-invalid");
        repasswordAlert.classList.replace("d-none","d-block")
        $("#submitBtn").prop("disabled", true)
    }
})


