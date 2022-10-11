//adds current day and date in real time that allows user to know what day it is
$("#currentDay").text(moment().format('dddd, MMMM Do'));

//Sets the hour id and description value in local storage when the save button is clicked.
$(".saveButton").on("click", function() {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".time-stamp-description").val();
    localStorage.setItem(hour, time-stamp-description);
    })