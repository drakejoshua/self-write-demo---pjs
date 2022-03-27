## Table of contents

- [Overview](#overview)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
This is a self-write/typing effect demo created by mabawonku joshua

## Description
This repo contains contains a demo( as shown in the live site URL ). The demo allows you to create a typing like effect on an element's text content
as they auto-write. it uses a function which works in a way( desrcibed below ). the function interacts and writes text into the associated element

### Links

- Live Site URL: [https://drakejoshua.github.io/self-write-demo---pjs/]

### Built with

- Semantic HTML5 markup
- Javascript ES6 ( no frameworks or node trouble )

## Author
- Hi, i'm mabawonku joshua an aspiring javascript programmer! ... i aim to build tech for the browser .. like saas's and webapps
- Frontend Mentor - [@drakejoshua](https://www.frontendmentor.io/profile/drakejoshua)
- Github - [@drakejoshua](https://github.com/drakejoshua)

## Acknowledgments
No acknowledgements ... did all this on my own .. but thanks to anyone following me or seeing this .. it really means a lot .!

## How To Use?( Manual )
- Step 1: just open the web page with live-site URL above .. the web page contains the demo.
- Step 2: the webpage contains a script which shows a simple example .....
- Step 3: to use the demo script, check the script for it's own documentation .. the script contains some info.
- Step 4: if the script was copied successfully into your project, you just need to make a call to function( selfWriteText ) in other scripts
- Step 5: note that the function must have arguments in the order:
    - TextToBeWritten: this contains the text to be written automatically by the function( a string must be passed as this argument )
    - TimeToWriteALetter: this contains the time in seconds to be used by the function in writing each character of the text to be written
    ( a number must be passed as this argument )
    - OverrideContent: this specifies whether the former content of the element the function works with should be over-written with the new content or not( a boolean must be passed as this argument )
    - Element: this contains the ID of the element the function is to write text into( a string must be passed containing the ID of the element and nothing else )
- Step 6: you can also copy the code in the demo's script, and modify to your taste. But make sure attribution is passed back!
- Note: you might want to add a cursor to the end of the element the function is going to work with .. an internal style was created in the index.html file .. you can copy that also .. but make sure you have the ID's set in your version of the stylesheet
