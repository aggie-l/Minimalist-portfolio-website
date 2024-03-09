const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const contactLink = document.querySelector(".btn-contact")
const portfolioLink = document.querySelector(".btn-portfolio")
const form = document.querySelector(".form")
const nameInput = document.querySelector(".name")
const emailInput = document.querySelector(".email")
const messageInput = document.querySelector(".message")
const nameError = document.querySelector(".name-error")
const emailError = document.querySelector(".email-error")
const messageError = document.querySelector(".message-error")



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })
})


const validateName = (val) => {
    if (val.value == null || val.value == "") {
        nameError.style.display = "block"
        nameInput.style.border = "1px solid #F43030"
    } else {
        nameError.style.display = "none"
        nameInput.style.border = "none"
        nameInput.value = ""
    }
}

const validateEmail = (val) => {
    if (val.value == null || val.value == "") {
        emailError.style.display = "block"
        emailInput.style.border = "1px solid #F43030"
    } else {
        emailError.style.display = "none"
        emailInput.style.border = "none"
        emailInput.value = ""
    }
}

const validateMessage = (val) => {
    if (val.value == null || val.value == "") {
        messageError.style.display = "block"
        messageInput.style.border = "1px solid #F43030"
    } else {
        messageError.style.display = "none"
        messageInput.style.border = "none"
        messageInput.value = ""
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateName(nameInput)
    validateEmail(emailInput)
    validateMessage(messageInput)
})


portfolioLink.addEventListener("click", () => {
    location.href = "./pages/portfolio.html"
})

contactLink.addEventListener("click", () => {
    location.href = "./pages/contact.html"
})

