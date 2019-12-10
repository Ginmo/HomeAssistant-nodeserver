function init() {
  window.setInterval(function() {
    getWeather();
  }, 60000);
}

function getWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?id=643493&appid=a28600688a20c09681c065b97217969c')
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

function drawWeather( d ) {
   var celcius = Math.round(parseFloat(d.main.temp)-273.15);

   document.getElementById('description').innerHTML = d.weather[0].description;
   document.getElementById('temp').innerHTML = celcius + '&deg;';
   document.getElementById('location').innerHTML = d.name;

   var picurl = 'https://openweathermap.org/img/wn/' + d.weather[0].icon + '.png';
   document.getElementById('picurl').src = picurl;
}

getWeather();
init();
/*
window.onload = function() {
  weatherBalloon();

}*/
