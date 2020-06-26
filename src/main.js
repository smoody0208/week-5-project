import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from './../src/galactic-age-calculator.js';

$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    let ageInput = parseInt($("input#age").val());
    let lifeInput = parseInt($("input#life").val());
    let newAge = new Calculator(ageInput, lifeInput);
    console.log(newAge);
    newAge.calculateMercury();
    newAge.calculateEarth();
    newAge.calculateVenus();
    newAge.calculateMars();
    newAge.calculateJupiter();
    $("#resultEarth").html(`Your Age: ${this.earthAge} <br> Average Lifespan: ${this.earthLife} Years Past Average Lifespan: ${this.earthYearsPast}`);
  })
})