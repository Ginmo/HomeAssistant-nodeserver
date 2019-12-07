function getToken() {
  axios.post('/login', {
    "name" : "testuser"
  })
  .then(function (response) {
    console.log(response.data.token);
    let token = response.data.token;
    localStorage.setItem("token", token);

  })
  .catch(function (error) {
    console.log(error);
  });
}

function removeToken() {
  localStorage.removeItem("token");
  console.log("removed token");
}

function readToken() {
  var testvar = localStorage.getItem("token");
  console.log(testvar);
}

function login() {
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

function logout() {
  localStorage.removeItem("token");
  window.location.replace('/login');
}