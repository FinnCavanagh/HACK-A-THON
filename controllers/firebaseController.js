angular
  .module("myapp")
  .controller("firebaseController", firebaseController);

function firebaseController($firebaseArray, $scope, $firebaseAuth) {
  var firebaseRef = new Firebase("https://burning-inferno-8419.firebaseio.com")
  


  $scope.user = { email: "", password: "" };
  $scope.messages = $firebaseArray(firebaseRef);
    
  $scope.addMessage = function(e) {
    console.log($scope)
    if (e.keyCode != 13) return;
    $scope.messages.$add({from: $scope.name, body: $scope.msg});
    $scope.msg = "";
  }

  // $scope.createUser = function(){
  //    console.log("In create user");
  //    firebaseRef.createUser({
  //      email    : $scope.user.email,
  //      password : $scope.user.password
  //    }, 
  //   function(error, userData) {
  //      if (error) {
  //        console.log("Error creating user:", error);
  //       }else{
  //        console.log("Successfully created user account with uid:", userData.uid);
  //      }
  //   });
  // }

  // $scope.authWithPassword = function(){
  //   firebaseRef.authWithPassword({
  //   email    : $scope.user.email,
  //   password : $scope.user.password
  //   }, 
  //   function(error, authData) {
  //    if (error) {
  //      console.log("Login Failed!", error);
  //     }else {
  //      console.log("Authenticated successfully with payload:", authData);
       
  //     }
  //   }); 
  // }

  // $scope.token = function(){
  //   console.log(authData)
  // }



   var auth = $firebaseAuth
}