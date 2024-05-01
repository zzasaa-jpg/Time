let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.getElementById("h3");

function date() {
    let date = new Date()
    h1.innerText = date.toLocaleTimeString();
    h2.innerText = date.toLocaleDateString();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    h3.innerText = days[date.getDay()]
}

date();

setInterval(date, 1000);