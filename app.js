let total = document.querySelector(".total");
let clear = document.querySelector(".btn-clear");
let button = document.querySelectorAll("button");
let plus = document.querySelector(".btn-plus");
let minus = document.querySelector(".btn-minus");
let multiply = document.querySelector(".btn-multiply");
let divide = document.querySelector(".btn-divide");
let equal = document.querySelector(".btn-equal");
let plusNegative = document.querySelector(".btn-plus-negative");
let percent = document.querySelector(".btn-percent");
let del = document.querySelector(".delete");
let decimal = document.querySelector(".btn-decimal");
let zero = document.querySelector(".btn-0")
let firstOperand = document.querySelector(".firstOperand");
var test;

total.textContent = 0

// make sure the '.' is only clicked once

function handleClick(){
  total.textContent += '.'
  decimal.disabled = true // disables the button
}
decimal.addEventListener("click",handleClick)


// for each button that's clicked

button.forEach((button) => {
  button.addEventListener("click", (event) => {
    test = total.textContent += button.value;
    // If the total starts with a leading 0 and does not contain a decimal point,
    // remove the leading 0 and disable the "zero" button.
    // Otherwise, enable the "zero" button.

    if (total.textContent[0] === "0" && !total.textContent.includes(".")) {
      console.log('its happening')
      zero.disabled = true
      total.textContent = total.textContent.substring(1);
    }else{
      zero.disabled = false
    }

  });
});



// clear the total div

clear.addEventListener("click", (event) => {
  decimal.disabled = false //reinstates '.' button
  total.textContent = 0;
});

// just a test case

divide.addEventListener("click", (event) => {
  test = total.textContent += "/";
});

// changing total to negative/positive

plusNegative.addEventListener("click", (event) => {
  total.textContent *= -1;
});

// percent of total

percent.addEventListener("click", (event) => {
  total.textContent /= 100;
});

// delete button

del.addEventListener("click", (event) => {
  if(total.textContent.length === 1 && total.textContent === '0'){
    del.disabled = true
  }else{
    del.disabled = false
    total.textContent = total.textContent.slice(0, -1);
  }
});



/*

querySelectorAll: collects and stores all refrences to all the input elements.

The forEach() method is used to listen for an event on each individual button

Then we add the value of the button to the total div

*/
