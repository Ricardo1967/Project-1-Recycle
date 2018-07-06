//Starts JAVASCRIPT logic, once the DOM is ready, and fully loaded

$(document).ready(function () {
//Initialize variables to use in the logic.
var zipCode = 0;
var materialR = 0;
var map = 0;

//When the button is clicked, grabs the information from the input boxes
$("#submitBtn").on("click", function(event){
        event.preventDefault();
        zipCode = $("#zipInput").val().trim();
        materialR = $("#materialInput").val().trim();
        console.log(zipCode, materialR);
    }); //Finishes function that grabs input values (WORKING)

});



