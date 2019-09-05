# Clicky Pup Game

## Links

https://liz-guenthner.github.io/clicky-game2/

https://github.com/liz-guenthner/clicky-game2

https://liz-guenthner.github.io/lizGuenthnerResume/


## Overview

Clicky Pup Game is a memory game build with React. The application's UI is broken up into components, the components manage state, and respond to user events.

### Instructions

1. The application renders different pup images to the screen. Each image listens for click events.

2. The application keeps track of the user's score. The user's score increments when clicking an image for the first time. The user's score resets to 0 if user clicks the same image more than once.

3. Every time an image is clicked, the images shuffle and render to the page in a random order.

4. Once the user's score is reset after an incorrect guess, the game restarts.

## Issues

1. I can't get the checkClickedPups function to get the id of the clicked pup. I wanted to push that id into an array and or see if it's in the array.

2. If the clicked id is in the array, I wanted this function to send an error message and then restart, empty out new array and set score to 0.

3. If the clicked id is not in the array, add the id to the new array, send success message and increment score.