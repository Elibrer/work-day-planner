var timeDisplayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var deleteBtnEl = $('.deleteBtn');

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
    currentHour = dayjs().format("H");
    currentHour = Number(currentHour);
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
    var textAreaInput = $(event.target).parent().children().eq(1).val() || "";

    localStorage.setItem(parentID, textAreaInput);
    console.log("Saved into local storage as: " + textAreaInput);
    
  });

  //Delete button function to remove text and delete from local storage.

  $(deleteBtnEl).click(function (event) {
    event.preventDefault();

    $(event.target).parent().children().eq(1).val("");
    
    var parentID = $(this).parent().attr('id');
    var textAreaInput = $(event.target).parent().children().eq(1).val() || "";
    localStorage.setItem(parentID, textAreaInput);
    
    localStorage.removeItem(parentID);

  });





  currentHour = dayjs().format("H");
  //currentHour = Number(currentHour);


  for (i = 9; i<=17; i++) {

    var hourEl = $("#hour-" + i).attr("id");

    hourEl = hourEl.slice(5);
    //hourEl = Number(hourEl);


    console.log(hourEl);

    console.log(currentHour);

  
    // if (hourEl > currentHour) {
    //   $("#hour-" + i).attr("class", "future");
    // } else if (hourEl < currentHour) {
    //   $("#hour-" + i).attr("class", "past");
    // } else {
    //   $("#hour-" + i).attr("class", "present");
    // }

  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
