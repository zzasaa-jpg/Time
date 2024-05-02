let h1 = document.querySelector("h1");

function ISTdate() {
    let date = new Date();
    h1.innerText = date.toString();
}

ISTdate();

setInterval(ISTdate, 1000);