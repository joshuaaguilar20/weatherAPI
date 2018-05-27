
  var lng ="";
  var lat ="";
  var picutre = "";
  $( document ).ready(function() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success,error);
  }
  else {
  alert(';( you should get a cat, so something can find you');
  

}
  function error(err){
    alert("may want to update....just sayin : ");
 };
});
  function success(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    var weatherlocation = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lng
    $.get(weatherlocation, function(data) {
   //   $.ajax({
     //   url : weatherlocation,
   //     dataType : "jsonp",
  //      success : function(data) {
         $(".temp-value").text(Math.round(data["main"]["temp"] * 9/5 + 32));
         $("h3").text((data["name"]));
         $("h4").text((data["weather"][0]["description"]));
         picture = (data["weather"][0]["icon"]);
         $('.weather-card.rain .top').css('background-image', 'url(' + picture + ')');
      //  }
     //   });
     });
 
  };

  










// function getWeatherDemo() {
//     $.get('',function (data) {
//         console.log(data);
//         alert("The temperatute in is " +
//   
//         );
//     });
// }


// // Make your API request:
// var apiUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// //put the correct method where the underscore is:
// $.get(apiUrl, function(data) {
//     $('body').html("<h1></h1>");
//     console.log("the temp in San Diego is");
//     console.log(data['query']['results']['channel']['item']['condition']['temp']);
// });



// // this is an example URL that returns a JSON object
// var jsonUrl = "https://api.gilt.com/v1/products/sizes.json?apikey=1320642ea27d50d0e99896abceecd691";

// // fill in the right method below
// $.getJSON(jsonUrl, function(data) {
//   // data contains the result of translating the JSON
//   // string into a javascript object
  
//   // we now use JSON.stringify to translate the data object
//   // back to a string to be able to display it in the page
//   $('#result').text(JSON.stringify(data, null, 2));
// }, "json");