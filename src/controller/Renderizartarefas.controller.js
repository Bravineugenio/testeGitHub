import Api from "./Api.controller.js";
import Modal from "./Modal.controller.js"

let teste = await Api.readAll()

export default class RenderizarTarefas {

    static loadMore = 7

    static async renderizarTarefas(infoHabitos) {

        console.log(infoHabitos)
        let habitos = infoHabitos
        // const habitos = await Api.readAll()
        habitos.slice(0, this.loadMore).forEach(element => {
            const div1 = document.createElement("div");
            const div2 = document.createElement("div")
            const inputCheckBox = document.createElement("input")
            const div3 = document.createElement("div")
            const pTitulo = document.createElement("p")
            const div4 = document.createElement("div")
            const pDescri = document.createElement("p")
            const div5 = document.createElement("div")
            const pTag = document.createElement("p")
            const div6 = document.createElement("div")
            const buttonEditar = document.createElement("p")
            const pEditar = document.createElement("img")
            

            buttonEditar.classList.add("buttonEditar")
            pEditar.classList.add("iconEditar");
            div1.classList.add("tarefasDOM")
            div3.classList.add("titulo")
            div4.classList.add("divDaDescricao")
            div5.classList.add("divCategoriaTarefaCard")
            div6.classList.add("divEditarTarefaCard")
            div2.classList.add("inputStatus")
            inputCheckBox.classList.add("inputCheck")
            inputCheckBox.id = element.habit_id+"checkbox"

            pDescri.classList.add("descricao")
            pTag.classList.add("tag")

            inputCheckBox.setAttribute("type", "checkbox")

            pTitulo.innerText = element.habit_title
            pDescri.innerText = element.habit_description
            pTag.innerText = element.habit_category

            pEditar.src = "../assets/img/options_menu_2.png"

            buttonEditar.append(pEditar)

            console.log(element.habit_status)

            pTitulo.stroke = element.habit_id

            inputCheckBox.onclick= function refresh(){
                document.location.reload(true)                
                // $("container_tarefas_reload").load(" container_tarefas_reload > *");
                // timerID = setTimeout(refresh,1500)
            }

            if (element.habit_status){
                pTitulo.style.textDecoration = "line-through";
                let id = element.habit_id.toString()
                console.log(id)
                let input = document.querySelector(".inputCheck");
                console.log(input)
                /* input.addEventListener("click", () => {
                    
                    input.style.backgroundColor = "black";
                }) */
                inputCheckBox.checked = true;
                inputCheckBox.style.display = "none";   
                const checkedGreen = document.createElement("img");
                checkedGreen.src = "../assets/img/checked_green_icon.png"               
                checkedGreen.className = "imgGreenChecked"
                div2.append(checkedGreen);
                
                // teste
                div1.classList.add("conclidoTarefa")
            }
            

            buttonEditar.addEventListener("click", (evento) => {

                //editar tarefa

                const taskList = document.getElementById("taskList")

                const divModal = document.createElement("div")
                const divModal_container = document.createElement("div")
                const divForm = document.createElement("div")
                const link_fechar = document.createElement("a")
                const tagH2 = document.createElement("h2")
                const form = document.createElement("form")
                const divHeader = document.createElement("div")
                const tagP_titulo = document.createElement("p")
                const input_titulo = document.createElement("input")
                const tagP_descricao = document.createElement("p")
                const input_descricao = document.createElement("input")
                const tagP_categoria = document.createElement("p")
                const select_categoria = document.createElement("select")
                const opcao_casa = document.createElement("option")
                const opcao_estudos = document.createElement("option")
                const opcao_lazer = document.createElement("option")
                const opcao_trabalho = document.createElement("option")
                const opcao_saude = document.createElement("option")
                const button_salvar = document.createElement("button")
                const button_excluir = document.createElement("button")
                const div_status = document.createElement("div")
                const input_status = document.createElement("input")
                const status = document.createElement("p")
                const div_button = document.createElement("div")

                div_status.classList.add("status")
                divModal.classList.add("modal")
                divForm.classList.add("formEditarTarefa")
                divHeader.classList.add("divHeaderEditarTarefa")
                divModal_container.classList.add("container")
                form.classList.add("modal_form")
                link_fechar.classList.add("buttonFecharEditarTarefa")
                button_salvar.id = "button_salvar"
                button_excluir.id = "button_excluir"
                div_button.id = "div_button"

                tagP_titulo.classList.add("tituloEditarTarefa")
                input_titulo.classList.add("inputEdit")
                input_descricao.classList.add("inputDescri")
                select_categoria.classList.add("selectEdit")

                link_fechar.innerText= "X"
                link_fechar.onclick = function removeModalEditar(){
                    taskList.removeChild(divModal)
                }
                


                status.innerText = "Status"
                input_status.setAttribute("type", "checkbox")
                tagH2.innerText = "Editar tarefa"
                tagP_titulo.innerText = "Titulo"
                tagP_descricao.innerText = "Descrição"
                tagP_categoria.innerText = "Categoria"
                select_categoria.name = "select"
                opcao_casa.value = "casa"
                opcao_estudos.value = "estudos"
                opcao_lazer.value = "lazer"
                opcao_saude.value = "saude"
                opcao_trabalho.value = "trabalho"

                opcao_casa.innerText = "Casa"
                opcao_estudos.innerText = "Estudos"
                opcao_lazer.innerText = "Lazer"
                opcao_saude.innerText = "Saude"
                opcao_trabalho.innerText = "Trabalho"

                input_titulo.type = "text"
                input_descricao.type = "text"
                input_descricao.id = "descricao"
                input_titulo.placeholder = "Digitar Titulo"
                input_descricao.placeholder = "Digitar Descriçao"
                button_salvar.innerText = "Salvar Alteração"
                button_excluir.innerText = "Excluir"
                input_titulo.name = "titulo"
                input_descricao.name = "descricao"
                button_salvar.name = "salvar"
                select_categoria.name = "categoria"

                divHeader.append(tagH2,link_fechar)
                divModal.append(divForm)
                divForm.append(divHeader, form)
                form.append(tagP_titulo, input_titulo, tagP_descricao, input_descricao, tagP_categoria, select_categoria, div_status, div_button)
                div_button.append(button_excluir, button_salvar)
                div_status.append(status, input_status)
                select_categoria.append(opcao_casa, opcao_estudos, opcao_lazer, opcao_saude, opcao_trabalho)
                taskList.append(divModal)

                
                
                //requisicao edit

                let botao_id = evento.target.id
                let captura1 = document.querySelector(".inputEdit")
                let captura2 = document.querySelector(".inputDescri")
                let captura3 = document.querySelector(".selectEdit")

                button_excluir.addEventListener("click", (event) => {
                  

                    Api.deleteHabit(botao_id)
                        .then(
                            (_) => {                                                      
                                (window.location.assign("Home.views.html"))
                            }
                        )
                        .catch(
                            (error) => { console.log(error) }
                        )
                });

                button_salvar.addEventListener("click", (evento) => {
                 
                    console.log(botao_id)
                    console.log(captura1.value)
                    console.log(captura2.value)
                    console.log(captura3.value)

                    Api.updateHabit(botao_id, ({ habit_title: captura1.value, habit_description: captura2.value, habit_category: captura3.value }))
                    divModal.style.display = "none";
                    document.location.reload(true)


                    //  teste  //

                    // console.log("Teste")
                    Modal.aviso("/src/assets/img/habito_alterado.png", "habitoAleterado")
                    Modal.timerAviso("habitoAleterado")

                })   
                




            return taskList

            


        })

        //const button_excluir = document.getElementById("button_excluir")

        

        inputCheckBox.name = element.habit_id
        pEditar.id = element.habit_id

        if (element.habit_status) {
            // console.log(element.habit_status)
            // div1.classList.add("concluido")
        }

        const taskList = document.getElementById("taskList")

        div1.append(div2, div3, div4, div5, div6)
        div2.append(inputCheckBox)
        div3.append(pTitulo)
        div4.append(pDescri)
        div5.append(pTag)
        div6.append(buttonEditar)
        taskList.append(div1)

    });

}


}

//let carlos = await
//  RenderizarTarefas.renderizarTarefas(teste)

// let testeUpdate = await Api.updateProfile({
//     "usr_image": "https://ih1.redbubble.net/image.2386474054.7032/flat,128x128,075,t.jpg"
//   })