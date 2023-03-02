var hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let startBtn = document.querySelector("#startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let secTimer, minTimer, hrTimer;

startBtn.addEventListener("click", () => {
  secTimer = setInterval(secFunc, 1000);
  minTimer = setInterval(minFunc, 60000);
  hrTimer = setInterval(hrFunc, 3600000);
});

resetBtn.addEventListener("click", () => {
  hr.textContent = "00";
  min.textContent = "00";
  sec.textContent = "00";
  clearInterval(secTimer);
  clearInterval(minTimer);
  clearInterval(hrTimer);
});

function secFunc() {
  if (sec.textContent >= 60) {
    sec.textContent = "00";
  }
  sec.textContent++;
}

function minFunc() {
  if (min.textContent >= 60) {
    min.textContent = "00";
  }
  min.textContent++;
}

function hrFunc() {
  if (hr.textContent >= 2) {
    hr.textContent == "00";
  }
  hr.textContent++;
}

stopBtn.addEventListener("click", () => {
  clearInterval(secTimer);
  clearInterval(hrTimer);
  clearInterval(minTimer);
});
