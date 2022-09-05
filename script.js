const range = document.querySelector("#range");
const payMonth = document.querySelector("h2");
const pageVienwsP = document.querySelector("#payMonth p");
const billing = document.querySelector("input[type=checkbox]");
const small = document.querySelector("small");

range.addEventListener("input", () => {
    testChecked();
    let rangeValue = range.value;
    let x = rangeValue * 3.125;
    let color = "linear-gradient(90deg,rgb(16, 213, 194)" + x + "%, rgb(234, 238, 251)" + x + "% )";     range.style.background = color;
});

billing.addEventListener("change", testChecked)

function testChecked(e){
    let rangeValue = range.value;
    pageVienwsP.innerText = rangeValue * 6.25 + "K" +" PAGEVIEWS";    
    
    if(billing.checked){
        small.innerText = "/ year";
        payMonth.innerHTML = `<h2>$${(rangeValue * 0.85 * 12).toFixed(2)}</h2>`;
    } else {
        small.innerText = "/ month";
        payMonth.innerHTML = `<h2>$${(rangeValue * 1).toFixed(2)}</h2>`;
    }


}