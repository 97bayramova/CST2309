"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Ejegul Bayramova
   Date:   4/16/2024
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;


var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";


for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   

   var itemCost = itemPrice[i]*itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   cartHTML += "</tr>";

    
   orderTotal += itemCost;
}

cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";

cartHTML += "</table>";

//display the cart
document.getElementById("cart").innerHTML = cartHTML;
