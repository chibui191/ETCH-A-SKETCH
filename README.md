# ETCH-A-SKETCH
[The Odin Project - Web 101] Project: ETCH-A-SKETCH

[View in Browser](https://chibui191.github.io/ETCH-A-SKETCH/)

Introduction

In this project you’re going to build a browser version of something between a sketchpad and an Etch-A-Sketch.

You can build this using the tools that you have already learned and there are plenty of resources on the net for learning stuff that we haven’t covered yet if you decide you need it. We’ll walk you through the basic steps, but it will be up to you to actually implement them.

Assignment

Follow the instructions atop Odin’s Google Homepage project to setup a git repository for this project.

Create a webpage with a 16x16 grid of square divs
1. Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!
2. Best to put your grid squares inside another “container” div (that one can go directly in your html)
3. There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them:
    .float/clear
    .inline-block
    .flexbox
    .CSS Grid    
4. Be careful with borders and margins, they can adjust the size of the squares!
5. “OMG, Why isn’t my grid being created???”
- Open your browser’s developer tools
- Check if there are any errors in the JavaScript console
- Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
- Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
1. Hint: “hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either of those events as a starting point.
2. There are multiple ways to change the color of the divs, including:
- adding a new class to the div
- changing the div’s background color using JavaScript.

Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.
1. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
2. Also check out prompts
4. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used

(Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

Push your project to GitHub!
