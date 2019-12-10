function init() {
  window.setInterval(function() {
    getTemperature();
  }, 3000);
}

function getTemperature() {
  axios.get('http://ec2-35-158-176-134.eu-central-1.compute.amazonaws.com/temperature/1')
	.then(function (response) {
    var temperatureText = response.data[0].currentTemperature;
    temperatureText = parseFloat(temperatureText).toFixed(2);
    if (temperatureText > 0) {
      temperatureText = temperatureText + "°";
    }
    else if (temperatureText < 0) {
      temperatureText = "-" + temperatureText + "°";
    }
    document.getElementById("roomTemperature").innerText = temperatureText;
  })
	.catch(function (error) {
		temperatureText = "Error with server.";
    document.getElementById("roomTemperature").innerText = temperatureText;
		console.log(error);
		return;
	});
}

getTemperature();
init();
