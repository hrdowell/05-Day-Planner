$(document).ready(function () {

    let currentTime = moment().format("MMMM Do YYYY, H:mm:ss a");
    let currentHour = moment().hour();
    let currentDay = moment().format("MMMM Do, YYYY");

    currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text("Today's Date: " + currentDay);


    $(".saveBtn").on("click", function () {
        let textArea = $(this).attr("data-value");
        let userInput = $("#" + textArea).val();
        localStorage.setItem("#" + textArea, userInput);

    });

    


    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    let milTime = [9,10,11,12,13,14,15,16,17]
    for (let i = 0; i < timeBlock.length; i++) {
        savedEvent = $(".saved-event");
        if (localStorage.getItem(timeBlock[i])) {
            $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]))
        };
    };


    function hourStyle() {
        let currentHour = moment().hour();
        for (let i = 0; i < timeBlock.length; i++) {
            
            if (milTime[i] === currentHour) {
                $(timeBlock[i]).addClass("present");
            } 
            else if(milTime[i] >= currentHour) {
                $(timeBlock[i]).addClass("future");
            }
            else {
                $(timeBlock[i]).addClass("past");
            };
            
        }     
        
    };
    hourStyle();

});