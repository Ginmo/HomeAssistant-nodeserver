
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