// Function to append characters to the display
function appendCharacter(character) {
    document.getElementById("display").value += character;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Function to calculate square root
function calculateSquareRoot() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(eval(display));
}

// Function to calculate square
function calculateSquare() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = Math.pow(eval(display), 2);
}

// Function to calculate power
function calculatePower() {
    let display = document.getElementById("display").value;
    let base = prompt("Enter the base:");
    let exponent = prompt("Enter the exponent:");
    document.getElementById("display").value = Math.pow(eval(base), eval(exponent));
}

// Function to calculate sine
function calculateSin() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = Math.sin(eval(display) * Math.PI / 180);
}

// Function to calculate cosine
function calculateCos() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos(eval(display) * Math.PI / 180);
}

// Function to calculate tangent
function calculateTan() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan(eval(display) * Math.PI / 180);
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
    const validKeys = '0123456789+-*/().%';
    
    if (validKeys.includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

// Add event listener for keyboard events
document.addEventListener('keydown', handleKeyboardInput);
