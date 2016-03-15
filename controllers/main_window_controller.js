app.controller('main_window_controller', ['user_service', 'video_service', '$http', '$scope',
  function(user_service, video_service, $http, $scope) {


  var self = this;

  this.user_settings = user_service.getUserSettings();
  this.user_friends = user_service.getFriends();
  this.friend_requests = user_service.getFriendRequests();
  this.messages = user_service.getMessages();

  var local_stream;
  this.video_streams = video_service.getVideoStreams();

  this.go = function() {
    // $scope.$emit('child', 'Some data');
  }

  this.startStream = function(video_streams) {

    video_service.updateVideoStreams('my video');

    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||
       navigator.mozGetUserMedia || navigator.msGetUserMedia);

    if (navigator.getUserMedia) {
  // Request the camera.
      navigator.getUserMedia( { video: true },
          function(localMediaStream) {
            local_stream = localMediaStream;

            addVideoObject(local_stream, "my video", video_streams);



            console.log(video_streams);


            }, function(err) {
              console.log('The following error occurred when trying to use getUserMedia: ' + err);
              });
          } else {
            alert('Sorry, your browser does not support getUserMedia');
      }

  }

  addVideoObject = function(video_object) {

    var vid = document.getElementById('camera-stream');

    if(video_object == null) {
      vid.src = "../images/icons/Pied Piper 2-48.png";
    } else {
      vid.src = window.URL.createObjectURL(video_object);
    }

  }

  this.stopStream = function() {

    local_stream.getVideoTracks()[0].stop();
    var vid = document.getElementById('camera-stream');
    vid.src = null;
  }

  this.addFriendVideo = function(x) {


    var video_string = "/friend_video?username=" + x;

    $http.get(video_string).then(function(response) {
      video_service.updateVideoStreams(response.data.username);
      addVideoObject(response.data.video_object);
    })
  }

  $scope.$emit('someEvent');

}]);
