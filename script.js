const range = document.querySelector("#range");
const payMonth = document.querySelector("h2");


range.addEventListener("input", () => {

    let rangeValue = range.value;
    let x = rangeValue * 3.125;
    let color = "linear-gradient(90deg,rgb(16, 213, 194)" + x + "%, rgb(234, 238, 251)" + x + "% )";    payMonth.innerHTML = `<h2>$${rangeValue}.00</h2>`
    console.log(x);
    range.style.background = color;
});
