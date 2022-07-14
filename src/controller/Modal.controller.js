import Api from "../controller/Api.controller.js";
import RenderizarTarefas from "./Renderizartarefas.controller.js";


export default class Modal {
    //Modal dinamico que recebe como parametros: 
    // 1 - Classe do box principal;
    // 2 - classe do box container dos dados;
    // 3 - recebe os dados que serão renderizados;
    //As classe são para estilização CSS;
    //Box dados precisa receber os elementos já em container chumbados;

    static tarefaCriada = 0

    static modalDinamico(id, classNameBoxPrincipal, dados) {
        const modal = document.createElement("div");
        const boxPrincipal = document.createElement("div");

        modal.className = "modal";
        modal.id = id;
        boxPrincipal.className = classNameBoxPrincipal;

        boxPrincipal.appendChild(dados);
        modal.appendChild(boxPrincipal);

        return modal;
    }

    static modalCadastro(titulo, objInputs) {
        const body = document.querySelector("body")

        const modal = document.createElement("div")
        modal.classList = "modal"

        const modalConteiner = document.createElement("div")
        modalConteiner.classList = "modalConteiner"
        
        const h2 = document.createElement("h2")
        h2.innerText = titulo

        const form = document.createElement("form")

        // console.log(objInputs)
        objInputs.forEach(objAtual => {
            const div = document.createElement("div")

            const label = document.createElement("label")
            label.for = objAtual.id
            label.innerText = objAtual.texto

            const input = document.createElement("input")
            input.id = objAtual.id
            input.placeholder = objAtual.texto
            input.type = objAtual.type
            
            div.append(label,input)
            form.append(div)
        });
        const buttonCadastro = document.createElement("button")
        buttonCadastro.classList = "button cadastrarUsuario"
        buttonCadastro.innerText = "Cadastrar"

        form.appendChild(buttonCadastro)

        const button = document.createElement("button")
        button.classList = "fechar"
        button.innerText = "x"
        
        modalConteiner.append(h2,form,button)
        modal.append(modalConteiner)
        body.append(modal)
    }

    static modalEditarPerfil() {
        const containerDados = document.createElement("div");
        const containerHeader = document.createElement("div");
        const titulo = document.createElement("h3");
        const botaoFecharModal = document.createElement("p");
        const form = document.createElement("form");
        const labelNome = document.createElement("p");
        const nome = document.createElement("input");
        const labelUrl = document.createElement("p");
        const url = document.createElement("input");
        const botaoSalvarAlteracoes = document.createElement("button");

        containerDados.className = "containerDadosEditarPerfil";
        containerHeader.className = "containerHeader";
        titulo.className = "titulo";
        labelNome.className = "labelNome";
        nome.className = "inputNome";
        labelUrl.url = "labelUrl";
        url.className = "inputUrl";
        botaoFecharModal.className = "botaoFecharModal";
        botaoSalvarAlteracoes.className = "botaoSalvarAlteracoesEditarPerfil";

        titulo.innerText = "Editar Perfil";
        botaoFecharModal.innerText = "x";
        labelNome.innerText = "Nome";
        labelUrl.innerText = "URL da imagem do perfil";
        botaoSalvarAlteracoes.innerText = "Salvar alterações";

        form.append(labelNome, nome, labelUrl, url, botaoSalvarAlteracoes);
        containerHeader.append(titulo, botaoFecharModal);
        containerDados.append(containerHeader, form);

        return containerDados;
    }

    static modalCriarTarefa() {

        const taskList = document.getElementById("modal_criar_tarefa")

        const divModal = document.createElement("modal")
        const divModal_container = document.createElement("div")
        const divForm = document.createElement("div")
        const link_fechar = document.createElement("a")
        const tagH2 = document.createElement("h2")
        const form = document.createElement("form")
        const divBoxHeader = document.createElement("div")
        const tagP_titulo = document.createElement("p")
        const input_titulo = document.createElement("input")
        const tagP_descricao = document.createElement("p")
        const input_descricao = document.createElement("input")
        const tagP_categoria = document.createElement("p")
        const select_categoria = document.createElement("select")
        const opcao_casa = document.createElement("option")
        const opcao_estudo = document.createElement("option")
        const opcao_lazer = document.createElement("option")
        const opcao_trabalho = document.createElement("option")
        const opcao_saude = document.createElement("option")
        const button = document.createElement("button")

        divModal.classList.add("modal")
        divModal_container.classList.add("containerCriarHabito")
        divForm.classList.add("form")
        link_fechar.classList.add("modal_button")
        link_fechar.classList.add("closeButtonCriarTarefa")
        form.classList.add("modal_form")
        button.id = "button_entrar"
        divBoxHeader.classList.add("divBoxHeader")

        link_fechar.innerText = "X"
        
        

        link_fechar.onclick = function removeModal(){
            taskList.removeChild(taskList.firstChild)
        }        
        


        tagH2.innerText = "Criar Hábito"
        tagP_titulo.innerText = "Titulo"
        tagP_descricao.innerText = "Descrição"
        tagP_categoria.innerText = "Categoria"

        select_categoria.name = "select"
        opcao_casa.value = "casa"
        opcao_estudo.value = "estudos"
        opcao_lazer.value = "lazer"
        opcao_saude.value = "saude"
        opcao_trabalho.value = "trabalho"

        opcao_casa.innerText = "Casa"
        opcao_estudo.innerText = "Estudo"
        opcao_lazer.innerText = "Lazer"
        opcao_saude.innerText = "Saude"
        opcao_trabalho.innerText = "Trabalho"

        input_titulo.type = "text"
        input_descricao.type = "text"
        input_descricao.id = "descricao"
        input_titulo.placeholder = "Digitar Titulo"
        input_descricao.placeholder = "Digitar Descriçao"
        button.innerText = "inserir"
        input_titulo.name = "titulo"
        input_descricao.name = "descricao"
        button.name = "Inserir"
        select_categoria.name = "categoria"
        
        divBoxHeader.append(link_fechar, tagH2)
        divModal.append(divModal_container)
        divModal_container.append(divForm)
        divForm.append(divBoxHeader,form)
        form.append(tagP_titulo, input_titulo, tagP_descricao, input_descricao, tagP_categoria, select_categoria, button)
        select_categoria.append(opcao_casa, opcao_estudo, opcao_lazer, opcao_saude, opcao_trabalho)
        taskList.append(divModal)

        divForm.addEventListener("submit", async (event) => {
            event.preventDefault()
          
            const formValue = [...event.target];
           
            const objectTarget = {}

            formValue.forEach(element => {
                if (element.name != "inserir") {
                    objectTarget[element.name] = element.value
                }
            })

           await Api.createHabit({habit_title:objectTarget.titulo,habit_description:objectTarget.descricao,habit_category:objectTarget.categoria}); //insira aqui a nossa API <==
           console.log(objectTarget.categoria)
             divModal.style.display = "none";
             //document.location.reload(true)

            const taskList = document.querySelector("#taskList")

            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }

            let tarefas = await Api.readAll()
            RenderizarTarefas.renderizarTarefas(tarefas)

            Modal.aviso("../assets/img/habito_criado.png", "usuarioCriado")
            Modal.timerAviso("usuarioCriado")

            // this.tarefaCriada += 1
        })

        //
        // button.addEventListener('click',(event)=>{
        //     event.preventDefault()
        //     let teste = input_titulo.value
        //     let inputDescricao = input_descricao.value
        //     console.log(teste)



        // })

        return taskList
    }


    static aviso(url, aviso) {
        const div = document.createElement("div")
        div.classList = `aviso`
        div.id = aviso

        const img = document.createElement("img")
        img.src = url

        div.append(img)
        const body = document.querySelector("body")

        console.log(div)
        body.append(div)
    }

        // usuarioCriado
        // habitoCriado
        // habitoAleterado

    static timerAviso(aviso) {

        const id = document.querySelector(`#${aviso}`)

        id.classList.add(aviso)
        setTimeout(() => {id.classList.remove(aviso)}, 5000)
    }

}

   














