//adds current day and date in real time that allows user to know what day it is
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Sets the hour id and description value in local storage when the save button is clicked.
$(".saveButton").on("click", function () {
  var hour = $(this).parent().attr("id");
  var timestampdescription = $(this).siblings(".timestampdescription").val();
  localStorage.setItem(hour, timestampdescription);
});
//uses local storage to retrieve the timestamp
var loadCalendar = function () {
    $("#9am .timestampdescription").val(localStorage.getItem("9am"));
    $("#10am .timestampdescription").val(localStorage.getItem("10am"));
    $("#11am .timestampdescription").val(localStorage.getItem("11am"));
    $("#12pm .timestampdescription").val(localStorage.getItem("12pm"));
    $("#1pm .timestampdescription").val(localStorage.getItem("1pm"));
    $("#2pm .timestampdescription").val(localStorage.getItem("2pm"));
    $("#3pm .timestampdescription").val(localStorage.getItem("3pm"));
    $("#4pm .timestampdescription").val(localStorage.getItem("4pm"));
    $("#5pm .timestampdescription").val(localStorage.getItem("5pm"));
    $("#6pm .timestampdescription").val(localStorage.getItem("6pm"));
  };
  
