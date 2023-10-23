"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Chris Russo
   Date: 10/12/2023


--------------------------------------
// Personal Notes
--------------------------------------
*/
// object = window
// method = alert
/* window.alert("Welcome to Tulsa!"); */

/* document.getElementsByTagName("h1")[1].innerHTML = "TODAY IS FRIDAY"; */ 
// This will change the second h1 on the page.


/* document.getElementById("dateNow").style.color = "white"; */
// .style to access and change CSS styles
// .color to change the font color (use any css styling with no -)
/* document.getElementsByTagName("div")[0].style.color = "white" */
// Second method to reach the same results using div instead of id






// CODE STARTS HERE --------------------

// Execute (call) the function to run and display countdown clock

runClock();
setInterval("runClock()", 1000);

// Function to create and run the countdown clock
function runClock() {
   // Store the current date and time
   let currentDay = new Date();
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();

   // Display the current date and time
   document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

   // Calculate the days until January 1st
   let newYear = new Date("January 1, 2018");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   let daysLeft = (newYear - currentDay) / (1000*60*60*24);

   // Calculate the hours left in the current day
   let hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   // Calculate the minutes left in the current day
   let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;

   //Calculate the seconds left in the current day
   let secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   // Display the time left until New Year's Day
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}

