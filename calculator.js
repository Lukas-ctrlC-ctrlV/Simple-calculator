const input = document.querySelector(".input1");
const buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (!e.target.closest(".buttons")) return; 

        const value = e.target.textContent;

        if (value === "=") {
        try {
        const result = eval(string);
        addToHistory(string, result);
        string = result;
        input.value = result;
        } catch {
        input.value = "Chyba";
        string = "";
        }
        } else if (value === "AC") {
            string = "";
            input.value = string;
        } else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

const toggle = document.querySelector(".toggle-theme");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

const historyList = document.querySelector(".history-list");

function addToHistory(expression, result) {
    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);
}