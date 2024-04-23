document.addEventListener("DOMContentLoaded", function () {
  // Check if user has visited the site before
  if (localStorage.getItem("visitedBefore")) {
    document.body.classList.remove("initial-visit");
  } else {
    // Set flag in local storage indicating first visit
    localStorage.setItem("visitedBefore", true);
  }
});
