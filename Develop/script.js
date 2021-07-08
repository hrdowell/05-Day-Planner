$(document).ready(function () {

    var currentTime = moment().format("MMMM Do YYYY, H:mm:ss a");
    var currentHour = moment().hour();
    var currentDay = moment().format("MMMM Do, YYYY");

    currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text("Today's Date: " + currentDay);


    $(".saveBtn").on("click", function () {
        var textArea = $(this).attr("data-value");
        var userInput = $("#" + textArea).val();
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
        var currentHour = moment().hour();
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