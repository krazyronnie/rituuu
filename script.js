function showMessage() {
    document.getElementById("message").innerHTML = "Ritu ne call kaat diya 😭";
}

function changeBg() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

