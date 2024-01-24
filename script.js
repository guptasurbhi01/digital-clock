function updateDigitalClock(){
const hour = document.getElementById('upper');
const minute = document.getElementById("upper2");
const second = document.getElementById("upper3");
const ampm = document.getElementById("change");
let time = new Date();
console.log(time);
let mainhours = time.getHours();
if (mainhours>12){
    mainhours = mainhours - 12 ;
}
hour.innerText = "0" + mainhours;
minute.innerText = time.getMinutes();
second.innerText = time.getSeconds();
ampm.innerText = time.getHours()>12 ? "PM" : "AM";
}
updateDigitalClock();

setInterval(updateDigitalClock, 1000);
