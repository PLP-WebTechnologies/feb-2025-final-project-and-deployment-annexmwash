// Toggle visibility of extra text on the home page
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const moreText = document.getElementById("moreText");

  if (toggleBtn && moreText) {
    toggleBtn.addEventListener("click", () => {
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        toggleBtn.textContent = "Show Less";
      } else {
        moreText.style.display = "none";
        toggleBtn.textContent = "Read More";
      }
    });
  }
});
