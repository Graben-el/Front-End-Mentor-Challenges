# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./images/nft-card.gif)


### Links

- Solution URL: [Lobby with all my solutions for Front-End Mentor's Challenges](https://graben-el.github.io/Front-End-Mentor-Challenges/)
- Live Site URL: [NFT preview card component solution](https://graben-el.github.io/Front-End-Mentor-Challenges/NFT%20Card%20Preview/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Icons inserted with pseudo-elements
- Flexbox

### What I learned

During this challenge and also the last one I could finally find a way to center vertically elements using flexbox, while the container is inside the body tag. 

```css
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--body-bg-color);
}
```

For some reason, that I still don't understand, the body tag won't center thing vertically  as expected even when height is set in an absolute value. But it works with the 100vh, which takes all the available view-port as height value.

I know that it isn't the best way to do it, though. More experienced people told me that the way I did it (by using height: 100vh) can cause some issues on lower resolutions, like on smartphones.

I also learned how to apply transparent overlay over a image, by covering it with an empty container where I activate the overlay setting with the hover pseudo-class.


  ## Author

  - Website - [Gabriel Rodrigues da Silva](https://github.com/Graben-el?tab=repositories)
  - Frontend Mentor - [@Graben-el](https://www.frontendmentor.io/profile/Graben-el)
  - Twitter - [@gabriel_ukisuke](https://twitter.com/gabriel_ukisuke)


  ## Acknowledgments

  Cheers to DevEmDobro team/community. I've learnt a lot of things in just a few weeks of course. 
