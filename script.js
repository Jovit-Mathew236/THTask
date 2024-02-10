document.addEventListener("DOMContentLoaded", function () {
  let theme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  console.log(theme);
  document.documentElement.setAttribute("theme", theme);

  function switchTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("theme", theme);
  }

  let themeSwitcher = document.getElementById("theme-switcher");
  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", switchTheme);
  }

  // Add event listeners to buttons
  document.getElementById("btn60").addEventListener("click", function () {
    sec = parseInt(this.getAttribute("data-sec")); // Update sec
    document.getElementById("head").innerHTML = "One Minute";
    resetTimer(); // Reset timer
  });

  document.getElementById("btn30").addEventListener("click", function () {
    sec = parseInt(this.getAttribute("data-sec")); // Update sec
    document.getElementById("head").innerHTML = "30 Seconds";
    resetTimer(); // Reset timer
  });

  document.getElementById("btn10").addEventListener("click", function () {
    sec = parseInt(this.getAttribute("data-sec")); // Update sec
    document.getElementById("head").innerHTML = "10 Seconds";
    resetTimer(); // Reset timer
  });
});

let number = 0;
let btn = document.getElementById("btn");
let sec = 60;
let timerInterval;

function timer() {
  timerInterval = setInterval(() => {
    sec--;
    if (sec >= 0) {
      document.getElementById("timer").innerHTML = sec;
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
      resetTimer(); // Reset timer when time is up
    }
  }, 1000);
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", function () {
  // If the timer is not already running, start the timer
  if (!timerInterval) {
    timer();
  }
  // Increment the number of clicks
  number++;
  document.getElementById("number").innerHTML = number;
});

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval); // Clear current timer interval
  document.getElementById("timer").innerHTML = sec; // Reset timer display
}
