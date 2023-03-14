//Variables that call upon HTML elements

var timeDisplayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var deleteBtnEl = $('.deleteBtn');

//Variables to set times to call upon later

var currentHour = 0;
var currentMinute = 0;

//Function which wraps all code interating with the DOM to only work on page load.

$(function () {

  //Pressing the tab button will only select the next text field and not the buttons.

  $("button").attr("tabindex", "-1");

  // Function to call the current date and time

  function displayDate() {
    var currentDay = dayjs().format('dddd, MMMM DD [at] hh:mm:ss'); 
    $(timeDisplayEl).text(currentDay);
  }
  setInterval(displayDate);

  //Reloads page every hour to update the current time period

  function refreshEveryHour() {
    currentMinute = dayjs().format("mm");
    if (currentMinute == 00) {
      location.reload();
    }
  }
  setInterval(refreshEveryHour, 60000);

  //For loop that gets all local storage elements and displays them in the right positions.

  for (i = 9; i <= 17; i++) {
    var storedTodos = localStorage.getItem("hour-" + i);
    $("#hour-" + i).children().eq(1).text(storedTodos);
  }

  //Save button function to save text input to local storage.

  $(saveBtnEl).click(function (event) {
    event.preventDefault();

    var parentID = $(this).parent().attr('id');
    var textAreaInput = $(this).parent().children().eq(1).val();

    localStorage.setItem(parentID, textAreaInput);
    console.log("Saved into local storage as: " + textAreaInput);
  });

  //Delete button function to remove text and delete from local storage.

  $(deleteBtnEl).click(function (event) {
    $(this).parent().children().eq(1).val("");
    
    var parentID = $(this).parent().attr('id');
    var textAreaInput = $(this).parent().children().eq(1).val() || "";
    localStorage.setItem(parentID, textAreaInput);
    
    localStorage.removeItem(parentID);
  });

  //Set current hour within the function

  currentHour = dayjs().format("H");
  currentHour = parseInt(currentHour);
  
  
  //EDIT THIS currentHour VAR FOR TESTING PURPOSES - for example if using this code outside of the 9-5 
  //office hours, set the variable to 14 for 2pm, etc.
  
  //currentHour = 13;

  //For loop that updates the background colour of the text areas depending on time of day

  for (i = 9; i<=17; i++) {

    /* Sets the hour-i id as a variable for every index loop, removing the 'hour-' so the result 
    is a number used to compare against the current hour */
    var hourEl = $("#hour-" + i).attr("id");
    hourEl = hourEl.slice(5);
    hourEl = parseInt(hourEl);

    //Removes previous class identifiers
    $("#hour-" + i).children().eq(1).removeClass("past");
    $("#hour-" + i).children().eq(1).removeClass("present");
    $("#hour-" + i).children().eq(1).removeClass("future");

    //Changes class identifiers (colour for the text area) depending
    if (hourEl > currentHour) {
      $("#hour-" + i).children().eq(1).addClass("future");
    } else if (hourEl < currentHour) {
      $("#hour-" + i).children().eq(1).addClass("past");
    } else {
      $("#hour-" + i).children().eq(1).addClass("present");
    }
  }
});
