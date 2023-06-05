# Calculator with JavaScript

## Live Site
- [Apple Calculator Dupe](https://apple-calculator-dupe.onrender.com/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
<!-- - [My process](#my-process) -->
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Testing my JavaScript skills by creating a calculator.

### The challenge

- Build out functional calculator

### Screenshot

![ScreenShot](https://raw.github.com/kxtara/calculator-js/main/build/images/calc.png)


## My process

I began by structuring the HTML and then adding some basic styling using TailwindCSS before utilizing JavaScript to implement the calculator's functionality. This project put me to the test in many different ways, but whenever I hit a wall, I took a break and subsequently returned to test out various solutions I had come up with during my break. The project's biggest challenge was getting the computations to function properly. You can find a list of everything I discovered to be broken in the "todo.txt" file, along with suggestions for how to fix it.


### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- JavaScript
- TailwindCSS

### What I learned

I've learned to use CSS Grid & the forEach() method.

```css
.container {
  display: grid;
  border-radius: 4%;
  padding: 1.5rem;
  background-color: black;
  align-content: center;
  justify-content: center;
  grid-template-columns: auto auto auto auto;
  gap: 7px;
  box-shadow: 0px 0px 9px 2px #FF9500;
}
```

```js
button.forEach(button => {
    button.addEventListener('click',event => {
        total.textContent += button.value
    })
});
```

### Continued development

Building this project was a lot of fun for me, and moving forward, I want to work more and learn more about DOM. Since I know I will learn so much more from doing so, this project has actually increased my desire to use JavaScript in other projects.

### Useful resources

- [Open AI](https://chat.openai.com/) - This helped me with explaining different methods and regular expressions in JavaScript.

- [W3Shools](https://www.w3schools.com/css/css_grid.asp) - This helped me implement the layout of the buttons for the calculator using CSS Grid.

## Author

- Twitter - [@kiarahoheb](https://www.twitter.com/kiarahoheb)
- LinkedIn - [@kiarahoheb](https://www.linkedin.com/in/kiara-hoheb-641157244/)