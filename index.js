document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementById("body");
  var isFirstVisit = localStorage.getItem("isFirstVisit");

  if (isFirstVisit === null) {
    // First visit
    localStorage.setItem("isFirstVisit", "false");
  } else {
    // Return visit
    body.classList.remove("initial-visit");
  }
});
