"use strict";

// function to calculate the result of our quiz
function calculateResult() {

    // Get the user's answers
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;
    let q4 = document.querySelector('input[name="q4"]:checked').value;
    let q5 = document.querySelector('input[name="q5"]:checked').value;

    // calculate score
    let counter = 0;
    if (q1 ==='yes'){
        counter ++;
    }
    if (q2 === 'yes'){
        counter ++;
    }
    if (q3 === 'yes'){
        counter ++;
    }
    if (q4 === 'yes'){
        counter ++;
    }
    if (q5 === 'yes'){
        counter ++;
    }
    
    // show our result to the html
    if (counter >= 3) {
        document.getElementById("result").innerHTML = "<br>You may be in a cult or susceptible to joining one.";
    } 
    else {
        document.getElementById("result").innerHTML = "<br>You are probably not in a cult.";
    }
}