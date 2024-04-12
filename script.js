const formulario = document.querySelector("#formulario")
const tarefa = document.querySelector("#tarefa")

function cadastroAtividade(e){
    e.preventDefault()

    //Verificar se o campo da tarefa está vazio
    if(tarefa.value === ""){
        alert("ESCREVA A ATIVIDADE!")
    }else{
        //Criar o form que vai ser estilizado
        const form_atividade = document.createElement("form")
        form_atividade.classList.add("form_tarefa")
        document.body.appendChild(form_atividade)

        //Criar o input:checkbox e a label dentro do form_atividade 
        const input_form_atividade = document.createElement("input")
        input_form_atividade.classList.add("form_tarefa_input")
        input_form_atividade.setAttribute("type", "checkbox")
        form_atividade.appendChild(input_form_atividade)

        const label_form_atividade = document.createElement("label")
        form_atividade.appendChild(label_form_atividade)
        label_form_atividade.classList.add("pendente")

        //(Label recebe o nome da atividade)
        label_form_atividade.textContent = tarefa.value 

        //Criar o botão de excluir
        const botao_excluir = document.createElement("button")
        botao_excluir.classList.add("form_tarefa_botao")
        form_atividade.appendChild(botao_excluir)
        botao_excluir.textContent = "Excluir"
        form_atividade.addEventListener("submit", ()=> form_atividade.remove())
        
        //limpar o "cache" das tarefas
        tarefa.value = ""
        tarefa.focus()
        
        //Verificar se a checkbox está marcada
        function verificarCheckbox(){   
            if(input_form_atividade.checked){
                label_form_atividade.classList.remove("pendente")
                label_form_atividade.classList.add("finalizada")
            }else{
                label_form_atividade.classList.remove("finalizada")
                label_form_atividade.classList.add("pendente")
            }
        }
        input_form_atividade.addEventListener("click", verificarCheckbox)
    }
    
}

formulario.addEventListener("submit", cadastroAtividade)

