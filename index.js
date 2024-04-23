window.onload = function () {
  // Check if it's the initial visit or if the website was quit and revisited
  if (!localStorage.getItem("visited")) {
    // If it's the initial visit, play the animations
    playAnimations();
    // Set the flag to indicate that the website has been visited
    localStorage.setItem("visited", true);
  }
};

// Function to play the animations
function playAnimations() {
  var element = document.querySelector(".sp-content");
  var animationClasses = [
    "frame-1",
    "frame-2",
    "frame-3",
    "frame-4",
    "frame-5",
    "frame-6",
  ];
  animationClasses.forEach(function (className, index) {
    setTimeout(function () {
      element.classList.add(className);
    }, index * 3000);
  });
}

// Remove the 'visited' flag from localStorage when the window is closed
window.addEventListener("beforeunload", function () {
  localStorage.removeItem("visited");
});
