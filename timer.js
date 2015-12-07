var timeoutID;
var words = ["christmas tree", "carols", "Carol singers", "snowman", "Grinch", "mince pies", "mulled wine", "Bob Geldof", "mistletoe", "rudolph", "santa", "snow", "presents"];




function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 5000);
}

function slowAlert() {
  alert("Your time is up!");
  alert()

}

function clearAlert() {
  window.clearTimeout(timeoutID);
}



// delayedAlert();
// slowAlert();
// clearAlert();
