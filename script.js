let content = document.querySelector(".content")
let full = document.querySelector(".full-content")
let firstMessage = "Lucas Mendonça"
let secondMessage = "Future is ready."

content.innerHTML = firstMessage



function color(color) {
    full.style.background = color
    content.classList.add("overview")
    content.innerHTML = secondMessage
}

function message() {
    content.innerHTML = secondMessage
    content.classList.add("overview")
}

function reload() {
    full.style.background = ''
    content.classList.remove("overview")
    content.innerHTML = firstMessage
}

