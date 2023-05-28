function Calculator() {}
Calculator.prototype = {
  constructor: Calculator,
  clear: function () {
    total.textContent = 0;
    decimal.disabled = false;
    del.disabled = false;
  },
  percent: function () {
    total.textContent = parseInt(total.textContent) / 100
    },
  plusNegative: function () {
    total.textContent *= -1;
  },
  handleClick: function () {
    total.textContent += ".";
    decimal.disabled = true;
  },
  delete: function () {
    if (total.textContent.length === 1) {
      total.textContent = 0;
      del.disabled = true;
    } else {
      del.disabled = false;
      total.textContent = total.textContent.slice(0, -1);
    }
  },
  enableDeleteButton: function () {
    del.disabled = false;
  },
  equal : function(){
    const arr = total.textContent.split(' ')
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '+'){
      let bo = total.textContent.split(' ')
      console.log(bo.length)
      if(bo.length === 3){
      const test = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1])
      total.textContent = test
      }else if(bo.length > 3){
        // [3,+,3,*,3]
        // if there's more than one operator 
        // calc the first three values: 3 + 3
        // then take that value and calc it by remaining values
      }
    }else if(arr[i] === '-'){
      const test = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1])
      total.textContent = test
    }else if(arr[i] === '/'){
      const test = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1])
      total.textContent = test
    }if(arr[i] === '*'){
      const test = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1])
      total.textContent = test
    }
  }
  }
};

const total = document.querySelector(".total");
const clear = document.querySelector(".btn-clear");
const percent = document.querySelector(".btn-percent");
const plusNegative = document.querySelector(".btn-plus-negative");
const button = document.querySelectorAll("button");
const del = document.querySelector(".delete");
const decimal = document.querySelector(".btn-decimal");
const zero = document.querySelector(".btn-0");
const numbers = document.querySelector(".num")
const calculator = new Calculator();
const plus = document.querySelector(".btn-plus");
const equal = document.querySelector(".btn-equal");

// let text = total.textContent.length;
// let regex = /^.{1,11}$/;
// if(!regex.test(text)){
//     numbers.disabled = true
//     console.log('regex')
// }

total.textContent = 0;

button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    total.textContent += btn.value;
    if (total.textContent.length > 1) {
      calculator.enableDeleteButton();
    }
    
    if (
      total.textContent.length > 1 &&
      total.textContent[0] === "0" &&
      total.textContent[1] !== "."
    ) {
      zero.disabled = true;
      total.textContent = total.textContent.substring(1);
    } else if (
      total.textContent.length === 2 &&
      total.textContent[0] === "0" &&
      total.textContent[1] === "."
    ) {
      zero.disabled = false;
    } else if (
      total.textContent.length > 2 &&
      total.textContent[0] === "0" &&
      total.textContent[1] !== "." &&
      total.textContent[2] !== "."
    ) {
      zero.disabled = true;
      total.textContent = total.textContent.substring(1);
    }
    zero.disabled = false;
  });
});

clear.addEventListener("click", (event) => calculator.clear());
percent.addEventListener("click", (event) => calculator.percent());
plusNegative.addEventListener("click", (event) => calculator.plusNegative());
decimal.addEventListener("click", (event) => calculator.handleClick());
del.addEventListener("click", (event) => calculator.delete());
equal.addEventListener("click",(event) => calculator.equal())