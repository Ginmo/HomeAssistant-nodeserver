

function getLights() {
  axios.get('http://ec2-35-158-176-134.eu-central-1.compute.amazonaws.com/lights/1')
	.then(function (response) {
    var lightVal = response.data[0].lightStatus;

    if (lightVal == "0") {
      document.getElementById("roomLights").checked = false;

    }
    else if (lightVal == "1") {
      document.getElementById("roomLights").checked = true;
    }
  })
	.catch(function (error) {
		console.log(error);
		return;
	});
}

function postLights() {
  var lightSwitch = document.getElementById("roomLights");

  if (lightSwitch.checked == true){
    axios.post('http://ec2-35-158-176-134.eu-central-1.compute.amazonaws.com/lights',
      {"lightstatus": "1"})
      .then(function(response){
      })
      .catch(function (error) {
        console.log(error);
        return;
      });
  }
  else if (lightSwitch.checked == false) {
    console.log("0");
    axios.post('http://ec2-35-158-176-134.eu-central-1.compute.amazonaws.com/lights',
      {"lightstatus": "0"})
      .then(function(response){
      })
      .catch(function (error) {
        console.log(error);
        return;
      });
  }
}
getLights();
