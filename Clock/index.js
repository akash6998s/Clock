let a;
let date;
let time;
setInterval(() => {
    

const a = new Date();

date = a.toLocaleDateString();
time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();


document.getElementById('time').innerHTML = time + " on " + date;

}, 1000);