
$(document).ready(function () {

    var materialR = 0;
    var map = 0;
    var late;
    var lnge;
    //When the button is clicked, grabs the information from the input boxes
    $("#submitBtn").click(function geocode(event){
            event.preventDefault();
            var zipCode = $("#zipInput").val().trim();
    
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address:zipCode,
                    key:'AIzaSyCewNtEX9C_9wLxAOvKyTmjT8pV0NJYC_o'
                },
            })
            .then(function(response){
                console.log(response);
    
                var formattedAddress = response.data.results[0].formatted_address;
                late = response.data.results[0].geometry.location.lat;
                lnge = response.data.results[0].geometry.location.lng;
                console.log(late, lnge, response.data.results[0].geometry.location);
               
                initMap(late, lnge);
            });

        });
    
});




function initMap(latit, lomgit) {
    
    console.log(latit, lomgit);
       
    var options = {
                zoom: 11,
                center: {lat:latit, lng:lomgit},
            }

        var map = new google.maps.Map(document.getElementById('map'), options);



 var marker = new google.maps.Marker({
     position: {lat:latit, lng:lomgit},
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

