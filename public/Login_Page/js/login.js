
window.addEventListener("keyup", function(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		document.getElementById("loginButton").click();
	}
});

var objectUsers = [
	{
		username: "testuser",
		password: "123"
	},
	{
		username: "testuser2",
		password: "123"
	}
]


function checkUserinfo() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "") {
		loginText = "Missing username.";
		document.getElementById("loginMessage").innerHTML = loginText;
		return;
	}
	if (password == "") {
		loginText = "Missing password.";
		document.getElementById("loginMessage").innerHTML = loginText;
		return;
	}

	axios.get('http://ec2-35-158-176-134.eu-central-1.compute.amazonaws.com/users')
	.then(function (response) {
		for (let i = 0; i < response.data.users.length; i++) {
			if (username == response.data.users[i].username &&
					password == response.data.users[i].password) {
				window.location.replace("test.html");
			}
			console.log("username: " + response.data.users[i].username);
			console.log("password: " + response.data.users[i].password);
		}

	})
	.catch(function (error) {
		loginText = "Error with server.";
		document.getElementById("loginMessage").innerHTML = loginText;
		console.log(error);
		return;
	});
	loginText = "Wrong username or password.";
	document.getElementById("loginMessage").innerHTML = loginText;
}
