// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const colors = ["#2d92d4", "#7655c4", "#f1c23f"];
const body = document.querySelector("body");

function handleBC() {
  const windowSize = window.innerWidth;
  if (windowSize < 400) {
    body.style.backgroundColor = colors[0];
  } else if (windowSize >= 400 && windowSize < 800) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

/*function init() {
  body.addEventListener("resize", handleBC);
  console.log(window.innerWidth);
}

init();*/

window.addEventListener("resize", handleBC);
