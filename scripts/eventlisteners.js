const fieldElement = document.querySelector("#message")
const outputElement = document.querySelector("#articleOne")
const outputElementTwo = document.querySelector("#articleTwo")


fieldElement.addEventListener("keyup", (event) => {
    outputElement.innerHTML = event.target.value 
    outputElementTwo.innerHTML = event.target.value}
)

