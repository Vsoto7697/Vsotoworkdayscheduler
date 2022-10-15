//adds current day and date in real time that allows user to know what day it is
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Sets the hour id and description value in local storage when the save button is clicked.
$(".saveButton").on("click", function () {
  var hour = $(this).parent().attr("id");
  var timestampdescription = $(this).siblings(".timestampdescription").val();
  localStorage.setItem(hour, timestampdescription);
});

//uses local storage to retrieve the calendar
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

var auditCalendar = function () {
  //for the currenttime variable
  var currentTime = moment().hours();

  //Add a color block and compare the calendar time to the current time.
  $(".time-stamp").each(function () {
    var calendarTime = parseInt($(this).attr("id"));

    if (calendarTime < currentTime) {
      $(this).addClass("past");
    } else if (calendarTime > currentTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
};

//array variables that define every hour
var nine =$('#9a')
var ten =$('#10a')
var eleven =$('#11a')
var twelve =$('#12p')
var one =$('#1p')
var two =$('#2p')
var three =$('#3p')
var four =$('#4p')
var five =$('#5p')
var six =$('#6p')

var timeArray = [nine, ten, eleven, twelve, one, two, three, four, five, six]

//create a set interval that runs a function every hour
/*the function will target the timestampanddescription class and be a .each method that it runs will compare the current hour using moment
to the value of the id assigned
create a switch case or a if else statement to apply classes with the 
correct coloring to them
*/
function colors() {
    for (let i=0; i < timeArray.length; i++) {
       
        if (currentTime > timeArray[i].attr("data-time")){
            timeArray[i].attr("class", "past col-md-10 timestampdescription text");

        } else if (currentTime == timeArray[i].attr("data-time")) {
            timeArray[i].attr("class", "present col-md-10 timestampdescription text");

        } else {

            timeArray[i].attr("class", "future col-md-10 timestampdescription text");
        }
        console.log (timeArray[i].attr("data-time"))
    }
}

// Button for clear the day
$("#clearDay").on("click", function(){
    localStorage.clear();
    loadCalendar()
  }) 

loadCalendar();
auditCalendar();
