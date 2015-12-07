// var timeoutID;

// function delayedAlert() {
//   timeoutID = window.setTimeout(slowAlert, 5000);
// }

// function slowAlert() {
//   alert("Your time is up!");

// }

// function clearAlert() {
//   window.clearTimeout(timeoutID);
// }

// delayedAlert();
// slowAlert();
// clearAlert();


var scoreBoard = $('li').click(function() { count++;
  $("#score").html("Whack count is: "+count); })

  $('li').on("click", function() {
    scoreBoard;  

  })

  <script type="text/javascript">
    var seconds;
    var temp;
   
    function countdown() {
      seconds = document.getElementById('countdown').innerHTML;
      seconds = parseInt(seconds, 10);
   
      if (seconds == 1) {
        temp = document.getElementById('countdown');
        temp.innerHTML = "all done, bye bye";
        return;
      }
   
      seconds--;
      temp = document.getElementById('countdown');
      temp.innerHTML = seconds;
      timeoutMyOswego = setTimeout(countdown, 1000);
    }
   
    countdown();
  </script>


