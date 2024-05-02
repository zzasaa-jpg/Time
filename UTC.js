let h1 = document.querySelector("h1");

function UTCdate() {
    let date = new Date();
    h1.innerText = date.toUTCString();
}

UTCdate();

setInterval(UTCdate, 1000);