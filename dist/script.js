var hr = document.querySelector("#hr")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")

let startBtn = document.querySelector("#startBtn")
let stopBtn = document.getElementById("stopBtn")
let resetBtn = document.querySelector("#resetBtn")

let secTimer,minTimer,hrTimer ;

startBtn.addEventListener("click", ()=>{
 secTimer = setInterval(secFunc,1000);
//  minTimer = setInterval()
})

function secFunc(){
        
        sec.textContent++
    
}

// stopBtn.addEventListener("click", ()=>{
//     clearInterval(setInterval)
//     console.log("hello");
// })

stopBtn.addEventListener("click", ()=>{
    clearInterval(secTimer)
})
