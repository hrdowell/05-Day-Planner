/* Pseudo Code
The current date should appear at the top of the page.
Then, a day planner is displayed with timeblocks for standard business hours.
WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green).
WHEN I click into a timeblock, THEN I can enter an event
WHEN I click the save button for that timeblock, THEN the text for that event is saved in local storage
WHEN I refresh the page, THEN the saved events persist.

User clicks timeblock-->types-->clicks save-->data input saved to Local Storage-->Refresh page-->All data entered still appears.
*/

$(document).ready(function () { //Instruct system to load html & css files first

    let currentTime = moment().format("MMMM Do YYYY, H:mm:ss a");
    let currentDay = moment().format("MMMM Do, YYYY");
    let currentHour = moment().hour();

    //Current month, day & year is displayed in the jumbotron header
    currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text("Today's Date: " + currentDay);
    
    //Assigns Save Button (saveBtn) click listener for user input within the text area
    $(".saveBtn").on("click", function () {
        //Get nearby values
        console.log(this);
        let textArea = $(this).attr("data-value");
        let userInput = $("#" + textArea).val();
        //Save item in local storage
        localStorage.setItem("#" + textArea, userInput);
    });

    //Load saved data from each hour timeblock within Local Storage. Loop through for each hour.
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    let milTime = [9,10,11,12,13,14,15,16,17]
    for (let i = 0; i < timeBlock.length; i++) {
        savedEvent = $(".saved-event");
        if (localStorage.getItem(timeBlock[i])) {
            $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]))
        };
    };
    //Create function to determine which hourly timeblock it is currently (present), which time blocks have already passed (past), and which haven't happened yet (future).
    
    //Group each of the 3 into separate classes in order to change color to correspond with each group. Past = gray, Current = red, future = green.
    function hourColor() {
        //Returns current # of hours.
        let currentHour = moment().hour();
        //loops through each time block
        for (let i = 0; i < timeBlock.length; i++) {
            //check if it is the current time block
            if (milTime[i] === currentHour) {
                $(timeBlock[i]).addClass("present");
            } 
            //check if time hasn't happened yet
            else if(milTime[i] >= currentHour) {
                $(timeBlock[i]).addClass("future");
            }
            //if neither, mark as the class "Past".
            else {
                $(timeBlock[i]).addClass("past");
            };  
        }       
    };
    //Run function to change the colors of each time block.
    hourColor();
});