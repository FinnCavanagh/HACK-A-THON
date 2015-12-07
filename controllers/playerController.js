angular
  .module("myapp")
  .controller("playerController", playerController);

  function playerController($firebaseArray, $scope, $firebaseAuth) {
    var firebasePlayer = new Firebase("https://playerturns.firebaseio.com")
    
    $scope.players = $firebaseArray(firebasePlayer)
    var players = $scope.players
    console.log(players)

   // $players.each(function( index ) {
   // console.log( index + ": " + $( this ).text() );
   // });


    if (players.length == 0){
      $scope.playerText = "Player 1 enter your name"
    }else if (players.length == 1){
      $scope.playerText = "Player 2 enter your name"
    }else if (players.length == 2){
      $scope.playerText = "Player 3 enter your name"
    }else if (players.length == 3){
      $scope.playerText = "Player 4 enter your name"
    }


    // {{players.length}}
    // {{players[0].player}}

    $scope.addPlayers = function(){
      players.$add({player: $scope.player})
    }


        

    

    
  }