app.controller('friends_controller', ['friend_service', 'user_service', '$http', '$scope',
        function(friend_service, user_service, $http, $scope) {

  var self = this;

  this.visible_friends_list = friend_service.getVisibleFriendList();
  this.user_in_view = user_service.getUserSettings().username;

  this.addFriend = function(friend) {
    var request_string = '/make_request?to=' + friend + '&from=' + this.user_in_view;
    $http.post(request_string);
    console.log(request_string);
  }


}]);
