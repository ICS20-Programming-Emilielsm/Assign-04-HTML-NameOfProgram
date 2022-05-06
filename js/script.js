// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  // declare constants
  const INDIV_PRICE = 10.00
  
  let giftSelected = false
  let sizePrice = 0
  
  	// initialize variables
	let subtotal = "Please make a selection above."
  	
	// get age and day of the week	
	let select = document.getElementById('size');
	let size = select.options[select.selectedIndex].value;
  let icing = parseInt(document.getElementById('icing').value)
  let sprinkles = parseInt(document.getElementById('sprinkles').value)
  let icingBorder = parseInt(document.getElementById('icingBorder').value)
  let select = document.getElementById('gift');
	let gift = select.options[select.selectedIndex].value;

  //find out price
  if (size == "Individual") {
		sizePrice = INDIV_PRICE
	}
	else if (age < 5 || age > 95) {
		cost = "The cost is FREE for you."
	}
	else if ((day == "Tuesday") || (day == "Thursday)") 
			 || (age >=12) && (age <=21)) {
		cost = "You get a student discount."
	}
	else if ((age > 0) || (day != "")) {		
		cost = "You have to pay regular price."
	}
    	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}
