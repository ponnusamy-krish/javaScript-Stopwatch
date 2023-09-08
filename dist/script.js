var hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let seconds,init;

startBtn.addEventListener("click", ()=>{
  clearInterval(init)
init = setInterval(inc, 1000)

})

stopBtn.addEventListener("click", ()=>{
  clearInterval(init)
})

resetBtn.addEventListener("click", ()=>{
clearInterval(init)
sec.innerHTML ="00"
min.innerHTML = "00"
hr.innerHTML ="00"

})
function inc(){
  sec.innerHTML++
  if(sec.innerHTML == 60){
    sec.innerHTML = 0;
    min.innerHTML++
  }

if(min.innerHtml == 60){
  min.innerHTML = 0;
  hr.innerHTML ++;
}
if(hr.innerHTML == 3){
  sec.innerHTML ="00"
  min.innerHTML = "00"
  hr.innerHTML ="00"

}


}
// checking git commands