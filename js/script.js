const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Switch to light mode";
  } else {
    themeBtn.textContent = "Switch to dark mode";
  }
});