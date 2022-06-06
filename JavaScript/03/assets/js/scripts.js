var checkMarcado = document.getElementById("tarefas");
checkMarcado.addEventListener("click", function(event) {
    //console.log(event.target); // este é o elemento clicado

    // span proximo ao checkbox clicado 
    elementoSpan = event.target.nextSibling;
    if (elementoSpan.classList.contains("linhaSpan")){
        elementoSpan.classList.remove("linhaSpan");
    } else{
        elementoSpan.classList.add("linhaSpan");
    }
})


function adicionaTarefa(){

    var tarefaTexto = document.getElementById('tarefaInput').value;
    console.log(tarefaTexto);
    if (tarefaTexto != "") {
        // Buscar elemento pai
        var elemento_pai = document.getElementById("tarefas");

        // Criar elemento
        var textoLista = document.createElement('span');
        var linha = document.createElement('br');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        

        // Criar o nó de texto
        var texto = document.createTextNode(tarefaTexto);
        //console.log(tarefaTexto);
        // Anexar o nó de texto ao elemento h1
        textoLista.appendChild(texto);

        // Agora sim, inserir (anexar) o elemento filho (textoLista) ao elemento pai (body)
        elemento_pai.appendChild(checkbox);
        elemento_pai.appendChild(textoLista);
        elemento_pai.appendChild(linha);

        document.getElementById('tarefaInput').value = "";
        document.getElementById('tarefaInput').focus();

    }

}

