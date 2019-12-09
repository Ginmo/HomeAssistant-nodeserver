
var token = localStorage.getItem("token");
console.log(token);
axios.get('/getstatus', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
}).then(function (response) {
  if (response.status == 200) {
    console.log("go to main");
    window.location.replace("/main");
  }else {
    console.log("go to login");
  }
  //console.log(response);

}).catch(function (error) {
  console.log(error);
  console.log("go to error");
});

window.addEventListener("keyup", function(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		document.getElementById("loginButton").click();
	}
});

function checkUserinfo() {
	let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);
  axios.post('/users', {
    "username" : username,
    "password" : password
  }).then(function (response) {
    let token = response.data.token;
    localStorage.setItem("token", token);
    window.location.replace('/');
    console.log(token);
  }).catch(function (error) {
    document.getElementById("loginMessage").innerText = "Wrong username or password.";
    console.log(error);
  })
}
