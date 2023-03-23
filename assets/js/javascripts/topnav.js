// For the responsive menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function collapseTopnav() {
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
}
