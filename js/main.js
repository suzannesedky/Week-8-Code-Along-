var getUsername = prompt("Enter your name:");

console.log(getUsername);

document.getElementById("username").innerText = getUsername; 
// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })