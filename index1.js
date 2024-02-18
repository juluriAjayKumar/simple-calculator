const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
    button.onclick = () => {
        switch (button.id) {
            case "sin":
                display.innerText = Math.sin((display.innerText)).toFixed(10);//
                break;
            case "cos":
                display.innerText = Math.cos((display.innerText)).toFixed(10);//
                break;
            case "tan":
                display.innerText = Math.tan((display.innerText)).toFixed(10);//
                break;
            case "sqrt":
                display.innerText = Math.sqrt((display.innerText)).toFixed(10);//
                break;
            case "log":
                display.innerText = Math.log10((display.innerText)).toFixed(10);//
                break;
            case "e^x":
                display.innerText = Math.exp((display.innerText)).toFixed(10);//
                break;
            case "del":
                display.innerText = display.innerText.toString().slice(0, -1);//
                break;
            case "clr":
                display.innerText = "";//
                break;
            case "x^2":
                display.innerText = parseFloat(display.innerText) ** 2;//
                break;
            case "ln":
                display.innerText = Math.LN2((display.innerText)).toFixed(10);//
                break;
            case "pi":
                display.innerText = Math.PI.toFixed(10);//
                break;
            case "dot":
                display.innerText += ".";//
                break;
            case "open":
                display.innerText += "(";//
                break;
            case "close":
                display.innerText += ")";//
                break;
            case "equals":
                if (display.innerText === "") {
                    display.innerText = "Empty!";
                    setTimeout(() => (display.innerText = ""), 2000);//
                }
                else {
                    display.innerText = eval(display.innerText).toFixed(10);//
                }
                break;
            default:
                display.innerText += button.id;
                break;
        }
    };

});


const themetogglebtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".cal");
themetogglebtn.onclick = () => {
    calculator.classList.toggle("dark");
    themetogglebtn.classList.toggle("active");
};