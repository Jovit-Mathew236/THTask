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

btn.addEventListener("click", function () {
  number = parseInt(number) + 1;
  document.getElementById("number").innerHTML = number;
});
