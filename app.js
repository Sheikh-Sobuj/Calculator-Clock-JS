for(let i = 2; i <= 10; i++) {
    document.write('<div class="multiplication">')
    for(let j = 1; j <= 10; j++) {
        document.write(i + " X " + j + " = " + i * j + "<br>")
    }
    document.write('</div>')
}
/*------clock---*/

setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

/*-----calculator-----*/

let currentDisplay = "0";
let resultDisplay=false;

function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    resultDisplay=false;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}

function calculateResult() {
    try {
        const result = eval(currentDisplay);
        currentDisplay += "\n"+ result.toString();
        updateDisplay();
    } catch (error) {
        currentDisplay += "\nError";
        updateDisplay();
    }
    resultDisplay=true;
}

function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === "") {
        currentDisplay = "0";
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
}

// Attach handleOverflow to window resize event
window.addEventListener("resize", handleOverflow);

// Call handleOverflow initially to handle any overflow on page load
handleOverflow();