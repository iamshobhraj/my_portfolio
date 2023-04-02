window.onload = function() {
    // Select all progress bars
    var progressBars = document.querySelectorAll(".progress");
  
    // Loop through progress bars and add animate class
    for (var i = 0; i < progressBars.length; i++) {
      var progressBar = progressBars[i];
      var progressBarClass = progressBar.className;
      progressBar.className = progressBarClass + " animate";
    }
  };