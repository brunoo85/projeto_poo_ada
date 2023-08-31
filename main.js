document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("formulario");
const listIn = document.querySelector(".listaSeries");

let series = [
     // {
     //      titulo: "The Midnight Gospel",
     //      genero: "Animação, ficção científica",
     //      plataforma: "Netflix",
     //      assistida: "Sim",
     // },{
     //      titulo: "Strange New Words",
     //      genero: "Ficção científica",
     //      plataforma: "Paramount+",
     //      assistida: "Sim",
     // },{
     //      titulo: "Game of Thrones",
     //      genero: "Ação, Fantasia, Medieval",
     //      plataforma: "Hbo Max",
     //      assistida: "Não",
     // }
]



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
          series.push(serie)
          titulo.value="";
          genero.value="";
          plataforma.value="";
          assistida.value="";

          updateItemList();
     }
     });

     function criarDivEditavel(serie,index){
          const div = document.createElement("div");
          div.classList.add("editable");

          const infos = [
               `<p>Titulo: <span contenteditable="true">${serie.titulo}</span></p>`,
            `<p>Gênero: <span contenteditable="true">${serie.genero}</span></p>`,
            `<p>Plataforma: <span contenteditable="true">${serie.plataforma}</span></p>`,
            `<p>Assistida:  <span contenteditable="true">${serie.assistida}</span></p>` 
          ];

          infos.forEach(info =>{
               div.innerHTML += info;
          });

          const botaoEditar = document.createElement("button");
          botaoEditar.classList.add("edit-button");
          botaoEditar.textContent = "Editar";

          botaoEditar.addEventListener("click",function(){
               const spans = div.querySelectorAll("span");
               spans.forEach(span => {
                    span.setAttribute("contenteditable", "true");
               });
               div.classList.add("editing"); // Adiciona a classe temporária

            botaoEditar.style.display = "none"; // Esconde o botão de editar
            saveButton.style.display = "block"; // Mostra o botão de salvar
          });

          const saveButton = document.createElement("button");
          saveButton.classList.add("save-button");
          saveButton.textContent = "Salvar";
          saveButton.style.display = "none"; // Inicialmente esconde o botão de salvar
          
          saveButton.addEventListener("click", function() {
            const spans = div.querySelectorAll("span");
            spans.forEach(span => {
              span.removeAttribute("contenteditable");
            });
            
            div.classList.remove("editing"); // Remove a classe de edição temporária
            
            botaoEditar.style.display = "block"; // Mostra o botão de editar
            saveButton.style.display = "none"; // Esconde o botão de salvar
          });

          const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Excluir";
    
    deleteButton.addEventListener("click", function() {
     console.log("o botaõ de excluir foi apertado");
      series.splice(index, 1); // Remove o item da lista
      updateItemList();
    });

    div.appendChild(botaoEditar);
    div.appendChild(saveButton);
    div.appendChild(deleteButton);

    return div;
     }


     function updateItemList() {
          listIn.innerHTML = ""; // Limpa a lista atual
          
          // Preenche a lista com os itens atualizados
          for (const serie of series) {
            const li = document.createElement("li");
            li.appendChild(criarDivEditavel(serie));
            listIn.appendChild(li);
          }
        }
        
        // Exibe a lista inicial ao carregar a página
        updateItemList();





series.forEach(serie => {
     listIn.innerHTML += `
     <li>
          <div>
               <p> Titulo: ${serie.titulo}</p>
               <p> Gênero: ${serie.genero}</p>
               <p> Plataforma: ${serie.plataforma}</p>
               <p> Assistida: ${serie.assistida}</p>
               <button> Alterar</button>
          </div>
     </li>`
   })

});