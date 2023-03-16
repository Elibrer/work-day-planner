# Online Workday Plannner
A simple and effective planner tool to help with sceduling tasks during a 9-5 work day.

![Languages Badge](https://img.shields.io/badge/Languages-3-blue)
![HTML Badge](https://img.shields.io/badge/HTML-59%25-red)
![JS Badge](https://img.shields.io/badge/JavaScript-31.3%25-yellow)
![CSS Badge](https://img.shields.io/badge/CSS-9.7%25-blueviolet)


## Deployment link

https://elibrer.github.io/work-day-planner/

## Description

This repository contains the code base for an online work day planner. Within the website a user may enter text into the allocated hourly workday time slots (9-5) and save their data to their own local storage. The date and time is displayed at the top of the page, so that the user knows what day it is and can plan accordingly. 

This project shows my increased knowledge of JavaScript, and namely the expanded use of Jquery. This JavaScript library allows for the coder to write more efficient and shorter code, in a 'shortcut' type of way. Further, playing around with the various Bootstrap options for CSS meant I could focus more on my JavaScript code, and less on the visuals - while still ensuring the application is sleek and nice to look at. 

## Table of Contents (Optional)

- [Features](#features)
- [Usage](#usage)
- [Languages Used](#languages-used)
- [Password Generator Preview](#work-day-planner-preview)
- [Credits](#credits)

## Features

- When the user loads the page, they are presented with a heading with the applications name, and a subheading containing todays current time and date.
- If the user had data saved within local storage previously, the relevant hour containers will fill with the saved string.
- The user may select a text area relative to the hour of the work day they choose and enter any text they like (eg. 'Meeting with _____', 'Lunch break', etc etc).
- If the save button is pressed, the relative text area will save it's value into local storage, with the storage key being the hour of the day that it's contained in.
- If the delete button is pressed, the data from the text area will be removed and the local storage for that relative hour will be deleted.
- Once every hour when the 'minutes' are equal to '00' the page is refreshed to update the colour of the current hour. 

## Usage

This planner is simply designed for anyone who likes to plan their day, letting the user organise their time efficiently. The date and time are displayed so the user knows exactly where they are with their day, with easy to visualise colours that mark the current time. The style is simple and neat, and the page is very easy to use.

## Languages Used
- ### **HTML**
- ### **CSS**
- ### **JavaScript**

## Password Generator Preview

![Image of the work day planner page, with the current date, save buttons, delete buttons, and text fields for data storage.](./assets/images/work-day-planner-preview.png"work day planner preview")


## Credits

### *Resources utilised from various websites:*

[Library of icons from Jsdeliver](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css)

[JavaScript library for accessing time and date](https://day.js.org/)

[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

[Stopping intervals](https://code.mu/en/javascript/book/prime/timers/timer-stopping/#:~:text=To%20stop%20the%20timer%2C%20use,the%20timer%20to%20be%20stopped.&text=Let%20a%20variable%20be%20given,this%20value%20to%20the%20console.)

[Glossary of Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

[Best practices for creating quality meta descriptions](https://developers.google.com/search/docs/appearance/snippet)

[Input tags](https://www.w3schools.com/tags/tag_label.asp)

[Creating links in a README.md file](https://docs.readme.com/main/docs/linking-to-pages)

[Badge generator](https://shields.io/)



