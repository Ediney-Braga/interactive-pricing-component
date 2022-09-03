const range = document.querySelector("#range");

range.addEventListener("input", () => {
    let x = range.value;
    let color = "linear-gradient(90deg, rgb(117,252,117)" + x + "%, rgb(214,214,214)" + x + "% )"; 

    console.log(x)
    range.style.background = color;
})