"use strict";


let btn = document.getElementById('btn');
let button_icon = document.querySelector('.button-icon');
let top_icon = document.querySelector('.top-icon');
let section_div = document.getElementById("contant-section");


 button_icon.addEventListener("click", function() {
 	section_div.style.height = "370px";
 	button_icon.style.display = "none";
 	top_icon.style.display = "block";
 })


  top_icon.addEventListener("click", function() {
 	section_div.style.height = "105px";
 	button_icon.style.display = "block";
 	top_icon.style.display = "none";
 })