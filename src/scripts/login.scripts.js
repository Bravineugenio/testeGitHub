import Api from "../controller/Api.controller.js"
import Modal from "../controller/Modal.controller.js"


const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
let button = document.getElementById("button_entrar_login")
button.addEventListener('click', async (event) => {
    event.preventDefault()

    if(email.value == "" && senha.value == ""){
        const email = document.querySelector(".email")
        email.classList.add("erro")

        const input = document.querySelector(".input")
        input.classList.add("erro")

    }else if(email.value == ""){
        const email = document.querySelector(".email")
        email.classList.add("erro")
        console.log(email.value)
    }else if(senha.value == "") {
        const input = document.querySelector(".input")
        input.classList.add("erro")
        console.log(senha.value)
    }
    
    Api.loginUser({"email":email.value,"password":senha.value})
    
})

// cadastro

let inputCadastro = [
    {
        texto: "Nome do usuario",
        id: "nome",
        type: "text"
    },
    {
        texto: "E-mail do usuario",
        id: "E-mail",
        type: "email"
    },
    {
        texto: "Senha do usuario",
        id: "Senha",
        type: "password"
    }
]

Modal.modalCadastro("Cadastro",inputCadastro)

const cadastro = document.querySelector(".CadastroButton")
const modal   = document.querySelector(".modal")
const buttonFechar = document.querySelector(".fechar")

cadastro.addEventListener("click", (evento) => {
    evento.preventDefault()

    modal.classList.add("ativo")

})

buttonFechar.addEventListener("click", (evento) => {
    evento.preventDefault()

    modal.classList.remove("ativo")

})

const cadastrarUsuario = document.querySelector(".button.cadastrarUsuario")
console.log(cadastrarUsuario)

cadastrarUsuario.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.remove("ativo")
    Modal.aviso("src/assets/img/usario_criado.png", "usuarioCriado")
    Modal.timerAviso("usuarioCriado")
})