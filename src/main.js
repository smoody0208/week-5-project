import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from './../src/galactic-age-calculator.js';

$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    let ageInput = parseInt($("input#age").val());
    let lifeInput = parseInt($("input#life").val());
    let newAge = new Calculator(ageInput, lifeInput);
    newAge.calculateMercury();
    newAge.calculateEarth();
    newAge.calculateVenus();
    newAge.calculateMars();
    newAge.calculateJupiter();
    $("#resultEarth").html(`Your Age: ${newAge.earthAge} <br> Average Lifespan: ${newAge.earthLife} <br> Years left/past: ${newAge.earthYearsPast}`);
    $("#resultMercury").html(`Your Age: ${newAge.mercuryAge} <br> Average Lifespan: ${newAge.mercuryLife} <br> Years left/past: ${newAge.mercuryYearsPast}`);
    $("#resultVenus").html(`Your Age: ${newAge.venusAge} <br> Average Lifespan: ${newAge.venusLife} <br> Years left/past: ${newAge.venusYearsPast}`);
    $("#resultMars").html(`Your Age: ${newAge.marsAge} <br> Average Lifespan: ${newAge.marsLife} <br> Years left/past: ${newAge.marsYearsPast}`);
    $("#resultJupiter").html(`Your Age: ${newAge.jupiterAge} <br> Average Lifespan: ${newAge.jupiterLife} <br> Years left/past: ${newAge.jupiterYearsPast}`);
  })
})