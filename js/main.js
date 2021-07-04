let techUl = document.getElementById("tech-ul");
let techH4 = document.getElementById("tech-h4");
let trxUl = document.getElementById("trx-ul");
let trxH4 = document.getElementById("trx-h4");

var style1 = document.getElementById("stylesheet1");
var style2 = document.getElementById("stylesheet2");
var container = document.getElementsByClassName("container");


// for neon theme
techUl.addEventListener("mouseover", function(){
  if (document.getElementById("pagestyle").getAttribute("href") === "css/neon.css") {
    techH4.style.backgroundColor = "#ff6f57";
    /* transition the background-color over 1s with a linear animation */
    techH4.style.transition = "background-color 1s linear";
  }
});
techUl.addEventListener("mouseleave", function(){
  techH4.style.backgroundColor = "";
});

trxUl.addEventListener("mouseover", function(){
  if (document.getElementById("pagestyle").getAttribute("href") === "css/neon.css") {
    trxH4.style.backgroundColor = "#ff6f57";
    /* transition the background-color over 1s with a linear animation */
    trxH4.style.transition = "background-color 1s linear";
  }
});
trxUl.addEventListener("mouseleave", function(){
  trxH4.style.backgroundColor = "";
});


// for switching themes
function themeSwitcher(stylesheet) {
  document.getElementById("pagestyle").setAttribute("href", stylesheet);
}

style1.addEventListener("click", function() {
  themeSwitcher("css/neon.css");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

style2.addEventListener("click", function() {
  themeSwitcher("css/snake.css");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
