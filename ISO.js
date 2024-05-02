let h1 = document.querySelector("h1");

function ISOdate() {
    let date = new Date();
    h1.innerText = date.toISOString(); 
}

ISOdate();

setInterval(ISOdate, 1000);