/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Aidan Minter
 *    Date: February 02, 2022  

 *    Filename: ft.js
 */

	// calculate all costs based on staff and adds to total
	
	// sets all form field values to default
	var photographerCost = 0;
	var totalCost = 0;
	var memoryBook = false;
	var reproductionRights = false;
	
	function calcStuff{
	    var num = document.getElementById("photognum");
	    var hrs = document.getElementById("photoghrs");
	    totalCost -= photographerCost;
	    // totalCost = totalCost - photographerCost;
	    photographerCost = num.value * 100 * hrs.value;
	    totalCost += photographerCost;
	    // totalCost = totalCost + photographerCost
	    document.getElementById("estimate").innerHTML = "$" + totalCost;

	}
	
	function resetForm(){
	    document.getElementById("photognum").value = l;
            document.getElementById("photoghrs").value = 2;
            document.getElementById("membook").checked = memoryBook;
            document.getElementById("reprodrights").checked = reproductionRights;
            document.getElementById("distance").value = 0;
	    calcStaff();
	}

	// creates event listeners

	function createEventListener(){
	    document.getElementById("photognum").addEventListener("change", calcStaff, false);
	    document.getElementById("photoghrs").addEventListener("change", calcStaff, false);