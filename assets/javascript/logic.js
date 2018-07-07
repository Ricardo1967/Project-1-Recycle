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
        
        var queryURL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBoFD4dhfsyEkbmiFi9WP-ZgnsgURasJ04&cx=017576662512468239146:omuauf_lfve&q=how+to+recycle+" + materialR;

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
              console.log(response);
              
              
              for(var i=0; i<response.items.length; i++){

                $(".addCardsHere").append("<div class='card cardsNum-" + i + "' style='width:300px;'> " );

                $(".cardsNum-" + i + "'").append("<div class='card-divider' id='title-" +i + "'><h4>" + response.items[i].htmlTitle +"</h4>"); 


                $(".cardsNum-" + i + "'").append("<a href='"+ response.items[i].link + "' id='link"+ i + " '>Read Article</a>");
                //$(".card").append("<div class='card-section' id='link" + i + "'>" +response.items[i].link );

                $(".cardsNum-" + i + "'").append("<div class='card-section' id='descript" + i + "'>" +response.items[i].snippet );
            
               
            }
            
          });
    }); //Finishes function that grabs input values (WORKING)

});

