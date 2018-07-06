//Starts JAVASCRIPT logic, once the DOM is ready, and fully loaded



function initMap() {
    //Map Options
 var options = {
     zoom: 11,
     center: {lat:25.7617, lng:-80.1918}
 }
 // New Map
 var map = new google.maps.Map(document.getElementById('map'), options);

 // Add marker

 var marker = new google.maps.Marker({
     position: {lat:25.7215, lng:-80.2684},
     map:map,
     icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
 });

 var infoWindow = new google.maps.InfoWindow({
     content: "<h3>RECYCLE BUDIES</h3>"
 });

 marker.addListener('click', function(){
     infoWindow.open(map, marker);
 } );
}
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
