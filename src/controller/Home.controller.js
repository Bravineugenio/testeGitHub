import Api from "./Api.controller.js"
import Modal from "./Modal.controller.js"
import RenderizarTarefas from "./Renderizartarefas.controller.js"


let header = document.querySelector("header")


export default class HomeControler {
    static criarTarefa() {
        let criar = document.getElementById("Criar")

        criar.addEventListener("click", () => {
            Modal.modalCriarTarefa()
        })
    }

    static async atualizarHeader() {

        const divPrincipal = document.createElement("div")
        const divHeader = document.createElement("div")
        const imgHeader = document.createElement("img")
        const divHeader2 = document.createElement("div")
        const h3Header = document.createElement("h3")
        const pHeader = document.createElement("p")
        const userTopRightPerfil = document.getElementById("userTopRightPerfil")
        divPrincipal.classList.add("divPrincipal")
        divHeader.classList.add("conteinerHeaderUser")
        imgHeader.classList.add("imgHeader")
        divHeader2.classList.add("topUserInfo")
        h3Header.classList.add("nomePrincipal")

        imgHeader.src = JSON.parse(localStorage.getItem("@usr_image"))
        userTopRightPerfil.src = JSON.parse(localStorage.getItem("@usr_image"))
        h3Header.innerText = JSON.parse(localStorage.getItem("@usr_name"))
        pHeader.innerText = "Estudante de Programação"

        divPrincipal.append(divHeader)
        divHeader.append(imgHeader, divHeader2)
        divHeader2.append(h3Header, pHeader)

        header.append(divPrincipal)

    }

    static filtrarPoCategoria() {
        const todosConcluidosCriar = document.querySelector("#todos_concluidos_criar")

        todosConcluidosCriar.addEventListener("click", async (evento) => {
            let idButton = evento.target.id

            if (idButton == "Todos") {
                let array = await Api.readAll()


                while (taskList.firstChild) {
                    taskList.removeChild(taskList.firstChild);
                }

                RenderizarTarefas.renderizarTarefas(array)

            } else if (idButton == "Concluidos") {
                let array = await Api.readAll()
                array = array.filter((tarefa) => {
                    return tarefa.habit_status
                })
                while (taskList.firstChild) {
                    taskList.removeChild(taskList.firstChild);
                }

                RenderizarTarefas.renderizarTarefas(array)
            }
        })
    }


    static atualizarStatusDaTarefa() {

        const taskList = document.querySelector("#taskList")
              

        taskList.addEventListener("click", async (evento) => {

            if(evento.target.id.includes("checkbox")){
                let id = evento.target.name

                Api.completeHabit(id)

                while (taskList.firstChild) {
                    taskList.removeChild(taskList.firstChild);
                }

                let array = await Api.readAll()
                RenderizarTarefas.renderizarTarefas(array)
            }
            
        })
    }

    static carregarMais() {
        const carregarMais = document.querySelector("#carregarMais")

        carregarMais.addEventListener("click", async (evento) => {
            RenderizarTarefas.loadMore += 8

            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }

            let array = await Api.readAll()
            console.log(RenderizarTarefas.loadMore)
            RenderizarTarefas.renderizarTarefas(array)
        })
    }

    // static editarPerfilButton() {

    //     const taskList = document.querySelector("#taskList")

    //     taskList.addEventListener("click", (evento) => {

    //         if(evento.target.id){
    //             // let id = evento.target.id

    //             // console.log(id)
    //             // conole.log(Modal.editarTarefa())
    //         }
    //     })
    // }

    
 

}

HomeControler.criarTarefa()
let teste = await HomeControler.atualizarHeader()

