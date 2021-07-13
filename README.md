# 🌞05-Day-Planner🌞

A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.





## 📅LINK TO DEPLOYED APPLICATION: 




📃Deployed Github Page: https://hrdowell.github.io/05-Day-Planner/ 


📂Github Repository: https://github.com/hrdowell/05-Day-Planner


👩‍💻My Profile: https://github.com/hrdowell





### 📆User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```



### 📅Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```





### 📆My Process

For this project, I use Moment.js to append text to the HTML containing the current local time⏰, and for time conversions⌚. I used if/else statements in the javascript file to determine which color should be displayed for each time block from 9AM-5PM.



- 📰Gray: past hour(s)
- 🟥Red: current hour/time block
- 🟢Green: future hour(s)



Then, I used an event listener👂 all of the save buttons that saves the user inputs for each time⏰ block to the local storage💾. This way, users can revisit their completed planner at any time. 👍





## 📆 The Final Product
![My Deployed Website In Action](./assets/images/finalproduct.gif)
