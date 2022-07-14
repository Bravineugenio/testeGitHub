import Api from "../controller/Api.controller.js"

import Modal from "../controller/Modal.controller.js"
import MenuUser from "../controller/MenuUser.controller.js"
import Functions from "../controller/Functions.controller.js";
import HomeControler from "../controller/Home.controller.js";
import RenderizarTarefas from "../controller/Renderizartarefas.controller.js";



MenuUser.logOut()
MenuUser.editarPerfil()
HomeControler.atualizarStatusDaTarefa()
// HomeControler.editarPerfilButton() 
HomeControler.carregarMais()

let tarefas = await Api.readAll()

RenderizarTarefas.renderizarTarefas(tarefas)

//append do modal editar tarfeas
Functions.body.appendChild(Modal.modalDinamico("modalEditarPerfil", "modalBoxOpcoesUsuario", Modal.modalEditarPerfil()));
document.querySelector("#modalEditarPerfil").style.display = "none";

//evento para os botões do modal de opções(editar e logOut)
Functions.eventoHeaderEditarOuSair();

HomeControler.filtrarPoCategoria()

//aviso
// Modal.aviso("/src/assets/img/habito_alterado.png", "habitoAleterado")
// Modal.timerAviso("habitoAleterado")


// console.log(Modal.tarefaCriada)
// if(Modal.tarefaCriada) {
//     Modal.tarefaCriada = 0
//     console.log(Modal.tarefaCriada)
//     console.log("Ola")
// }


// let body = document.querySelector(".container_tarefas")

// let teste = await RenderizarTarefas.renderizarTarefas()








