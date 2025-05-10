let Input = document.querySelector(".input1")
let Buttons = document.querySelectorAll("button")
let string = ""

Buttons.forEach(function(oneButton){
    oneButton.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){
            string = eval(string)
            Input.value = string
        } else if (e.target.innerHTML == "AC"){
            string = ""
            Input.value = string
        } else if (e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1)
            Input.value = string
        } else {
            string += e.target.innerHTML
            Input.value = string
        }
    })
})