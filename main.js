document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("formulario");
const listaSeries = document.querySelector(".listaSeries");

class Series{
     constructor(titulo,genero,plataforma,assistida) {
          this.titulo = titulo;
          this.genero = genero;
          this.plataforma=plataforma;
          this.assistida=assistida;
     }
}

class Serie extends Series{
     constructor(){}

     atualizarLista() {
          listaSeries.innerHTML = ""; // Limpa a lista atual
          
          // Preenche a lista com os itens atualizados
          for (const serie of catalogo) {
            const li = document.createElement("li");
            li.appendChild(criarDivEditavel(serie));
            listaSeries.appendChild(li);
          }
        }

        criarDivEditavel(serie,index){
          const div = document.createElement("div");
          div.classList.add("serieDiv");

          const infos = [
               `<p>Titulo: <span editavel="true">${serie.titulo}</span></p>`,
            `<p>Gênero: <span editavel="true">${serie.genero}</span></p>`,
            `<p>Plataforma: <span editavel="true">${serie.plataforma}</span></p>`,
            `<p>Assistida:  <span editavel="true">${serie.assistida}</span></p>` 
          ];

          infos.forEach(info =>{
               div.innerHTML += info;
          });

          const botaoEditar = document.createElement("button");
          botaoEditar.classList.add("botaoEditar");
          botaoEditar.textContent = "Editar";

          botaoEditar.addEventListener("click",function(){
               const spans = div.querySelectorAll("span");
               spans.forEach(span => {
                    span.setAttribute("editavel", "true");
               });
               div.classList.add("editando"); // Adiciona a classe temporária

            botaoEditar.style.display = "none"; // Esconde o botão de editar
            saveButton.style.display = "inline-block"; // Mostra o botão de salvar
          });

          const saveButton = document.createElement("button");
          saveButton.classList.add("botaoSalvar");
          saveButton.textContent = "Salvar";
          saveButton.style.display = "none"; // Inicialmente esconde o botão de salvar
          
          saveButton.addEventListener("click", function() {
            const spans = div.querySelectorAll("span");
            spans.forEach(span => {
              span.removeAttribute("");
            });
            
            div.classList.remove("editando"); // Remove a classe de edição temporária
            
            botaoEditar.style.display = "inline-block"; // Mostra o botão de editar
            saveButton.style.display = "none"; // Esconde o botão de salvar
          });

          const deleteButton = document.createElement("button");
          deleteButton.classList.add("botaoExcluir");
          deleteButton.textContent = "Excluir";
    
          deleteButton.addEventListener("click", function() {
               catalogo.splice(index, 1); // Remove o item da lista
               atualizarLista();
          });

          div.appendChild(botaoEditar);
          div.appendChild(saveButton);
          div.appendChild(deleteButton);

          return div;
     }

}

let catalogo = [
     {
          titulo: "The Midnight Gospel",
          genero: "Animação, ficção científica",
          plataforma: "Netflix",
          assistida: "Sim",
     },{
          titulo: "Strange New Words",
          genero: "Ficção científica",
          plataforma: "Paramount+",
          assistida: "Sim",
     },{
          titulo: "Game of Thrones",
          genero: "Ação, Fantasia, Medieval",
          plataforma: "Hbo Max",
          assistida: "Não",
     }
]

     let calls = new Series("Calls","Suspense/Terror","Apple TV+","Sim");


     catalogo.push(calls);




form.addEventListener("submit", function(event){
     event.preventDefault();

     const titulo = document.getElementById("title");
     const genero = document.getElementById("gender");
     const plataforma = document.getElementById("plataform");
     const assistida = document.getElementsByName("assistida");
     
     let newAssistida = "";

     for (const opcao of assistida) {
          if (opcao.checked) {
               newAssistida = opcao.value;
            break;
          }
        }


     const serie={
          titulo: titulo.value,
          genero: genero.value,
          plataforma: plataforma.value,
          assistida: newAssistida,
     }
     

     if(serie){
          catalogo.push(serie)
          titulo.value="";
          genero.value="";
          plataforma.value="";
          assistida.value="";

          atualizarLista();
     }
     });

     function criarDivEditavel(serie,index){
          const div = document.createElement("div");
          div.classList.add("serieDiv");

          const infos = [
               `<p>Titulo: <span editavel="true">${serie.titulo}</span></p>`,
            `<p>Gênero: <span editavel="true">${serie.genero}</span></p>`,
            `<p>Plataforma: <span editavel="true">${serie.plataforma}</span></p>`,
            `<p>Assistida:  <span editavel="true">${serie.assistida}</span></p>` 
          ];

          infos.forEach(info =>{
               div.innerHTML += info;
          });

          const botaoEditar = document.createElement("button");
          botaoEditar.classList.add("botaoEditar");
          botaoEditar.textContent = "Editar";

          botaoEditar.addEventListener("click",function(){
               const spans = div.querySelectorAll("span");
               spans.forEach(span => {
                    span.setAttribute("editavel", "true");
               });
               div.classList.add("editando"); // Adiciona a classe temporária

            botaoEditar.style.display = "none"; // Esconde o botão de editar
            saveButton.style.display = "inline-block"; // Mostra o botão de salvar
          });

          const saveButton = document.createElement("button");
          saveButton.classList.add("botaoSalvar");
          saveButton.textContent = "Salvar";
          saveButton.style.display = "none"; // Inicialmente esconde o botão de salvar
          
          saveButton.addEventListener("click", function() {
            const spans = div.querySelectorAll("span");
            spans.forEach(span => {
              span.removeAttribute("");
            });
            
            div.classList.remove("editando"); // Remove a classe de edição temporária
            
            botaoEditar.style.display = "inline-block"; // Mostra o botão de editar
            saveButton.style.display = "none"; // Esconde o botão de salvar
          });

          const deleteButton = document.createElement("button");
          deleteButton.classList.add("botaoExcluir");
          deleteButton.textContent = "Excluir";
    
          deleteButton.addEventListener("click", function() {
               catalogo.splice(index, 1); // Remove o item da lista
               atualizarLista();
          });

          div.appendChild(botaoEditar);
          div.appendChild(saveButton);
          div.appendChild(deleteButton);

          return div;
     }


     function atualizarLista() {
          listaSeries.innerHTML = ""; // Limpa a lista atual
          
          // Preenche a lista com os itens atualizados
          for (const serie of catalogo) {
            const li = document.createElement("li");
            li.appendChild(criarDivEditavel(serie));
            listaSeries.appendChild(li);
          }
        }
        
        // Exibe a lista inicial ao carregar a página
        atualizarLista();

});

/*
metodos:
atualizarLista()
criarDivEditavel(serie,index)
(outras que pode ser acrescentado pra quebrar o código em mais funções)
criarBotaoEditar()
criarBotaoSlvar()
criarBotaoDeletar()
*/


