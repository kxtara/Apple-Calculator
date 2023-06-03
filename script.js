function Calculator() {}
Calculator.prototype = {
  constructor: Calculator,
  enableOperators : function(){
    operators.forEach(op => op.disabled = false);
  },
  disableOperators : function(){
    operators.forEach(op => op.disabled = true)
  },
  nonDisableNumbers : function(){
    numbers.forEach(numBtn => {
      numBtn.disabled = false
    })
  },
  clear: function () {
    total.textContent = 0;
    decimal.disabled = false;
    del.disabled = false;
    this.nonDisableNumbers()
    this.enableOperators()
  },
  percent: function () {
    total.textContent = parseInt(total.textContent) / 100;
  },
  plusNegative: function () {
    total.textContent *= -1;
  },
  handleClick: function () {
    total.textContent += ".";
    decimal.disabled = true;
  },
  delete: function () {
    this.nonDisableNumbers()
    this.enableOperators()
    if (total.textContent.length === 1) {
      total.textContent = 0;
      del.disabled = true;
    } else {
      del.disabled = false;
      total.textContent = total.textContent.slice(0, -1);
    }
    console.log(total.textContent)
  },
  enableDeleteButton: function () {
    del.disabled = false;
  },
  equal: function () {
    // splits the total.textContent at the operators while still including the operator in the array using ()- capture group
    let regex = /([+\-*/])/
    const arr = total.textContent.split(regex);
    //console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "+") {
        // console.log(arr);
        if (arr.length === 3) {
          const test = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
          total.textContent = test;
        }
      } else if (arr[i] === "-") {
        const test = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
        total.textContent = test;
      } else if (arr[i] === "/") {
        const test = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
        total.textContent = test;
      }
      if (arr[i] === "*") {
        const test = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
        total.textContent = test;
      }
    }
  },
};
const calculator = new Calculator();
const total = document.querySelector(".total");
const clear = document.querySelector(".btn-clear");
const percent = document.querySelector(".btn-percent");
const plusNegative = document.querySelector(".btn-plus-negative");
const button = document.querySelectorAll("button");
const del = document.querySelector(".delete");
const decimal = document.querySelector(".btn-decimal");
const zero = document.querySelector(".btn-0");
const numbers = document.querySelectorAll(".num");
const plus = document.querySelector(".btn-plus");
const equal = document.querySelector(".btn-equal");
const operators = document.querySelectorAll(".operators")

total.textContent = 0;

// disables operators after an operator is clicked
operators.forEach(op => {
  op.addEventListener("click",(event) => {
  calculator.disableOperators()
  equal.disabled = true
  calculator.equal()
  })
})

// enables the operators when a number is clicked
numbers.forEach(numBtn => {
  numBtn.addEventListener("click",(event) => {
    calculator.enableOperators()
    equal.disabled = false
  })
})

button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // if total length is >= 10 disable numBtn(all number buttons)
    if (total.textContent.length >= 10) {
      numbers.forEach(numBtn => {
        numBtn.disabled = true;
        //calculator.nonDisableNumbers()
      })
    }
    // total is set to the btn val (if button 1 & 2 is clicked total will display 12)
    total.textContent += btn.value;

    // making sure total div is never empty
    if (total.textContent.length > 1) {
      calculator.enableDeleteButton();
    }

    // making sure there's no leading 0's
    if (
      total.textContent.length > 1 &&
      total.textContent[0] === "0" &&
      total.textContent[1] !== "."
    ) {
      // disable zero if there's more than one without a '.' in the beginning of the total like: '001 || 0000234'
      zero.disabled = true;
      // remove the leading zero
      total.textContent = total.textContent.substring(1);
    } else if (
      // if theres a '.' enable the 0 btn
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
equal.addEventListener("click", (event) => calculator.equal());