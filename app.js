 let background = document.getElementById("background");
 let originalBackground = "url('videos/9ca8a249a424febe2acfe6d8c6c5b33a.gif')";
 let pausedBackground = "url('videos/pause.jpg')";

 function pauseBackground() {
     if (background.style.backgroundImage !== pausedBackground) {
         background.style.backgroundImage = pausedBackground;
         console.log("Background paused.");
     } else {
         console.log("Background is already paused.");
     }
 }

 function playBackground() {
     if (background.style.backgroundImage !== originalBackground) {
         background.style.backgroundImage = originalBackground;
         console.log("Background playing.");
     } else {
         console.log("Background is already playing.");
     }
 }
