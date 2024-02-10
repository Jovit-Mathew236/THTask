document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
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
});

let number = document.getElementById("number").innerHTML;
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
