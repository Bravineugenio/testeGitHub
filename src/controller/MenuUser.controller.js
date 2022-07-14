import Api from "./Api.controller.js";
import Functions from "./Functions.controller.js";
import Modal from "./Modal.controller.js";

export default class MenuUser {

    static logOut() {

        let saida = document.querySelector(".logOut");

        saida.addEventListener("click", () => {
            window.location.href = "/index.html"
            localStorage.removeItem("@token")
        })
    }

    static async editarPerfil() {

        const botaoEditar = document.querySelector(".editarPerfil");

        botaoEditar.addEventListener("click", () => {

            document.querySelector("#modalEditarPerfil").style.display = "flex";

            const botaoFecharModal = document.querySelector(".botaoFecharModal");
            botaoFecharModal.addEventListener("click", () => {
                document.querySelector("#modalEditarPerfil").style.display = "none";

            });

            const botaoSalvarAlteracoesEditarPerfil = document.querySelector(".botaoSalvarAlteracoesEditarPerfil");
            botaoSalvarAlteracoesEditarPerfil.addEventListener("click", async (e) => {
                e.preventDefault();

                const inputNome = document.querySelector(".inputNome").value;
                const inputUrl = document.querySelector(".inputUrl").value;
                let res = "";

                if (inputNome && inputUrl) {

                    res = await Api.updateProfile({
                        usr_name: inputNome,
                        usr_image: inputUrl

                    })

                } else if (inputNome) {

                    res = await Api.updateProfile({
                        usr_name: inputNome,
                    })

                } else if (inputUrl) {

                    res = await Api.updateProfile({
                        usr_image: inputUrl
                    })
                }

                Functions.atualizaHeader(res);
                document.querySelector(".inputNome").innerText = "";
                document.querySelector(".inputUrl").innerText = "";
                document.querySelector("#modalEditarPerfil").style.display = "none";
                localStorage.setItem("@usr_image", JSON.stringify(res.usr_image));
                localStorage.setItem("@usr_name", JSON.stringify(res.usr_name));

                Modal.aviso("/src/assets/img/habito_alterado.png", "habitoAleterado")
                Modal.timerAviso("habitoAleterado")
            })

        })
    }

}