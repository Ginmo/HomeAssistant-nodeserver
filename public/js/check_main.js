document.getElementsByTagName("BODY")[0].style.display = "none";

var token = localStorage.getItem("token");
console.log(token);
axios.get('/getstatus', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
}).then(function (response) {
  if (response.status == 200) {
    console.log("go to main");
  }else {
    console.log("go to login");
    window.location.replace("/login");
  }
  //console.log(response);

}).catch(function (error) {
  console.log(error);
  console.log("go to error");
  window.location.replace("/login");
});

axios.get('/getusername', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
}).then(function (response) {
  console.log(response);
  document.getElementById("loggedInUsername").innerText = response.data.username;
});

function logout() {
  localStorage.removeItem("token");
  window.location.replace('/login');
}

setTimeout(function() {
  document.getElementsByTagName("BODY")[0].style.display = "block"
}, 2000);
  
