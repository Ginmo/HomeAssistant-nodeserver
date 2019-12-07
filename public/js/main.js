axios.get('/getusername', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }).then(function (response) {
    console.log(response);
    document.getElementById("username").innerText = response.data.username;
  })