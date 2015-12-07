var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 5000);
}

function slowAlert() {
  alert("Your time is up!");

}

function clearAlert() {
  window.clearTimeout(timeoutID);
}

<<<<<<< HEAD
// delayedAlert();
=======
delayedAlert();
>>>>>>> 284aeac64260b26409d816404c5a3904b97e0347
// slowAlert();
// clearAlert();
