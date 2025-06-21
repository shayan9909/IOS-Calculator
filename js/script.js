let addition = document.querySelector(".addition");
let subtraction = document.querySelector(".subtraction");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");

// buttons
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let display = document.querySelector(".display");
let displayinput = document.querySelector(".displayinput");
let reset = document.querySelector(".reset");
let del = document.querySelector(".del")
let percent = document.querySelector(".percent")
let plusminus= document.querySelector(".plusminus")
let error = document.querySelector(".error")
let errorbox = document.querySelector(".errorbox")
let menu = document.querySelector(".menu")


displayinput.value = ``;

seven.addEventListener("click", function() {
 displayinput.value += "7";
 errrem()

})
eight.addEventListener("click", function() {
    displayinput.value += "8";
    errrem()
})
nine.addEventListener("click", function() {
    displayinput.value += "9";
    errrem()
})
five.addEventListener("click", function() {
    displayinput.value += "5";
    errrem()
})
four.addEventListener("click", function() {
    displayinput.value += "4";
    errrem()
})
six.addEventListener("click", function() {
    displayinput.value += "6";
    errrem()
})
one.addEventListener("click", function() {
    displayinput.value += "1";
    errrem()
})
two.addEventListener("click", function() {
    displayinput.value += "2";
    errrem()
})
three.addEventListener("click", function() {
    displayinput.value += "3";
    errrem()
})
zero.addEventListener("click", function() {
    displayinput.value += "0";
    errrem()
})
dot.addEventListener("click", function() {
    displayinput.value += ".";
    errrem()
})

reset.addEventListener("click", function() {
    displayinput.value = "";
    errrem()
})

// functions 
let total = 0

addition.addEventListener("click", function() {
    displayinput.value += " + ";
    errrem()
;

})

multiplication.addEventListener("click", function(){
      displayinput.value += " x ";
      errrem()
      
})
division.addEventListener("click", function(){
      displayinput.value += " ÷ ";
      errrem()


})
subtraction.addEventListener("click", function(){
      displayinput.value += " - ";
      errrem()
})

equal.addEventListener("click", function () {
  let expression = displayinput.value;
  expression = expression.replace(/x/g, "*").replace(/÷/g, "/")  .replace(/%/g, "/100");

  try {
    let result = eval(expression);
    displayinput.value = result; 
  } catch (error) {
    displayinput.value = "Error";
    errrem()
  }
})


del.addEventListener("click", function(){
    displayinput.value = displayinput.value.slice(0, -1);
})



percent.addEventListener("click", function(){
displayinput.value+= "%"
})

plusminus.addEventListener("click", function(){
error.style.display = "block"
errorbox.style.display = "block"
error.innerHTML = "sorry this feature isn't avaiable right now !"
 
})


function errrem(){
 if(displayinput.value){
    error.style.display = "none"
errorbox.style.display = "none"
}
}
menu.addEventListener("click", function(){
    error.style.display = "block"
errorbox.style.display = "block"
error.innerHTML = "sorry this feature isn't avaiable right now !"
})