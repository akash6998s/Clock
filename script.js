setInterval(() => {
    
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


a = new Date();
date = a.toLocaleDateString(undefined, options);
time = a.getHours() + ":" + a.getMinutes()+ ":" + a.getSeconds()

document.getElementById("time").innerHTML = time + " <br/> on  " + date;

}, 1000);


function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
