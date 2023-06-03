# Calculator with JavaScript

## Live Site
- [Apple Calculator Dupe](https://applecalculatordupe.netlify.app/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  <!-- - [Links](#links) -->
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

![ScreenShot](https://raw.github.com/kxtara/calculator-js/main/images/calc.png)


<!-- ### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

<!-- ## My process -->



### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- JavaScript

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
        test = total.textContent += button.value
    })
});
```



### Continued development

Building this project was a lot of fun for me, and moving forward, I want to work more and learn more about DOM. Since I know I will learn so much more from doing so, this project has actually increased my desire to use JavaScript in other projects.



### Useful resources

- [Open AI](https://chat.openai.com/) - This helped me with explaining different methods in JavaScript.

- [W3Shools](https://www.w3schools.com/css/css_grid.asp) - This helped me implement the layout of the buttons for the calculator using CSS Grid.

## Author

- Twitter - [@kiarahoheb](https://www.twitter.com/kiarahoheb)
- LinkedIn - [@kiarahoheb](https://www.linkedin.com/in/kiara-hoheb-641157244/)