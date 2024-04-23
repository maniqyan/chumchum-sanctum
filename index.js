window.addEventListener("load", function () {
  // Check if sessionStorage contains the 'visited' key
  if (!sessionStorage.getItem("visited")) {
    // This is the first visit
    playAnimations();
    // Set the 'visited' key in sessionStorage
    sessionStorage.setItem("visited", true);
  }
});

window.addEventListener("beforeunload", function () {
  // Remove the 'visited' key from sessionStorage when leaving the website
  sessionStorage.removeItem("visited");
});
