import Modal from "./Modal.controller.js";
import MenuUser from "./MenuUser.controller.js";
import Api from "./Api.controller.js";

export default class Functions {

    //classe para criar as funções da aplicação

    static body = document.querySelector("body");
    static header = document.querySelector("header");

    static eventoHeaderEditarOuSair() {

        this.header.addEventListener("click", (e) => {

            if (e.target.className === "logOut") {
                MenuUser.logOut();
            } else if (e.target.className === "editarPerfil") {
                MenuUser.editarPerfil();
            }
        })
    }

    static atualizaHeader(objectResponse) {
        const imagemUsuarioHeader1 = document.querySelector(".imagem-usuario");
        const nomePrincipal = document.querySelector(".nomePrincipal");
        const imgHeader = document.querySelector(".imgHeader");

        console.dir(imagemUsuarioHeader1)
        console.dir(nomePrincipal)
        console.dir(imgHeader)
        imagemUsuarioHeader1.src = objectResponse["usr_image"];
        imgHeader.src = objectResponse["usr_image"];
        nomePrincipal.textContent = objectResponse["usr_name"];
    }

}
