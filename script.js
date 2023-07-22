function downloadVideo() {
  var videoUrl = document.getElementById("videoUrl").value;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  // Perform validation on the video URL if necessary

  // Create a video element to display the downloaded video
  var videoElement = document.createElement("video");
  videoElement.controls = true;

  // Set the source of the video element to the entered URL
  videoElement.src = videoUrl;

  // Append the video element to the resultDiv
  resultDiv.appendChild(videoElement);
}