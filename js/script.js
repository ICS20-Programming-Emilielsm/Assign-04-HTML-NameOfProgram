// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function orderSent() {
  // declare constants
  const INDIV_PRICE = 10.00;
  const GRP_PRICE = 20.00;
  const PRTY_PRICE = 50.00;
  const ICING_PRICE = 7.00;
  const SPRINKLE_PRICE = 5.00;
  const ICEBORD_PRICE = 15.00;
  const WATR_PRICE = 2.00;
  const ICDTEA_PRICE = 4.00;
  const COFE_PRICE = 4.50;
  const HST = 0.13;
  
  	// initialize variables
  let sizePrice = 0
  let topPrice = 0
  let drinkPrice = 0
  	
	// get age and day of the week	
	let size = document.getElementById('size');
  let topping = document.getElementById('topping');
  let drink = document.getElementById('drink');

  //find out price
  if (size == "Individual")  {
		sizePrice = INDIV_PRICE 
	}
	else if (size == "Group") {
		sizePrice = GRP_PRICE
	}
	else (size == "Party") {
		sizePrice = PRTY_PRICE
	}
  // toppings
   if (topping == "icing") {
		topPrice = ICING_PRICE
	}
	else if (topping == "sprinkles") {
		topPrice = SPRINKLE_PRICE
	}
	else (topping == "icingBorder") {
		topPrice = ICEBORD_PRICE
	}
  //drinks
  if (drink == "water") {
		drinkPrice = WATR_PRICE
	}
	else if (drink == "icedTea") {
		drinkPrice = ICDTEA_PRICE
	}
	else (drink == "coffee") {
		drinkPrice = COFE_PRICE
	}
  // Totals
	let subtotal =  + drinkPrice + topPrice + sizePrice
  let tax = subtotal * HST
  let total = subtotal + tax
    	
  	// display the cost
  document.getElementById("display-cost").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}
