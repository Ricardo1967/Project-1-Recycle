//Starts JAVASCRIPT logic, once the DOM is ready, and fully loaded
$(document).ready(function () {
    //Initialize variables to use in the logic.
    // var zipCode = 0;
    var materialR = 0;
    var map = 0;
    var late;
    var lnge;
    //When the button is clicked, grabs the information from the input boxes
    $("#submitBtn").on("click", function geocode(event){
            event.preventDefault();
            var zipCode = $("#zipInput").val().trim();
    
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address:zipCode,
                    key:'AIzaSyCewNtEX9C_9wLxAOvKyTmjT8pV0NJYC_o'
                }
            })
            .then(function(response){
                console.log(response);
    
                var formattedAddress = response.data.results[0].formatted_address;
                late = response.data.results[0].geometry.location.lat;
                lnge = response.data.results[0].geometry.location.lng;
            });
            materialR = $("#materialInput").val().trim();
            console.log(zipCode, materialR);
    
            
    initMap(late, lnge);
    
        }); //Finishes function that grabs input values (WORKING)
    
    });


function initMap(lt,lg) {

 var options = {
     zoom: 11,
     center: {lat:lt, lng:- lg}
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

