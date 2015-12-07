angular
  .module("myapp")
  .controller("firebaseController", firebaseController);

function firebaseController($firebaseArray, $scope, $firebaseAuth) {
  var firebaseRef = new Firebase("https://burning-inferno-8419.firebaseio.com")
  
  

  $scope.user = { email: "", password: "" };
  $scope.messages = $firebaseArray(firebaseRef);
    
  $scope.addMessage = function(e) {

    if (e.keyCode != 13) return;
    $scope.messages.$add({name: $scope.name, body: $scope.msg});
    $scope.msg = "";
  }

  console.log($scope.players)
  $scope.players = $firebaseArray(firebaseRef).players

  $scope.addPlayers = function(){
    $scope.players.$add({player1: $scope.player1, player2: $scope.player2, player3: $scope.player3, player4:  $scope.player4})
    
  }




   var auth = $firebaseAuth
}