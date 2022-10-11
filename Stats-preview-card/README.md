# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./ss5.PNG)

### Links

- Solution URL: [Developer Code](https://github.com/Strocs/Frontend-Mentor_Stats-preview-card)
- Solution URL: [Production Code](https://github.com/Strocs/Frontend-Mentor_Stats-preview-card/tree/main/docs)
- Live Site URL: [Stats Preview Card](https://strocs.github.io/Frontend-Mentor_Stats-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is another and in my opinion, better solution for overlay an image:
```html
<picture class="card-image">
	<source media="(min-width: 440px)" srcset="./src/assets/image-header-desktop.jpg" />
	<img class="image-mobile" src="./src/assets/image-header-mobile.jpg" alt="" />
</picture>
```

```css
/* Image parent */
.card-image {
	position: relative;
}

.card-image:before {
	/* Overlay */
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
  background: linear-gradient(135deg, var(--stat-headings) 0%, var(--accent2) 60%);
	z-index: 10;
}
```

And a way to do linear gradient to text color:
```css
.content-title span {
  color: transparent;
  background: linear-gradient(135deg, var(--main-paragraph) 0%, var(--accent) 80%);
  background-clip: text;
  -webkit-background-clip: text;
}
```

## Author

- Website - [Strocs](https://github.com/Strocs)
- Frontend Mentor - [@Strocs](https://www.frontendmentor.io/profile/Strocs)
- Twitter - [@\_Strocs](https://www.instagram.com/_strocs/)
