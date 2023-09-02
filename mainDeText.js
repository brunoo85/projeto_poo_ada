const catalogo = [];

class Series{
     constructor(titulo,genero,plataforma,assistida) {
          this.titulo = titulo;
          this.genero = genero;
          this.plataforma=plataforma;
          this.assistida=assistida;
          }
     }
     
class Serie extends Series{
     constructor(titulo,genero,plataforma,assistida){
          super(titulo,genero,plataforma,assistida);
          }
          criarDivEditavel(serie,index){}

          atualizarLista() {
               const listaSeries = document.getElementById("listaSeries");
               listaSeries.innerHTML = ""; // Limpa a lista atual

               catalogo.forEach((serie, index) =>{
                    const li = document.createElement("li");
                    li.appendChild(this.criarDivEditavel(serie, index));
                    listaSeries.appendChild(li);
               });
               }

          criarDivEditavel(serie, index){
               
               const div = document.createElement("div");
               div.classList.add("serieDiv");
     
               const infos = [
                    `<p>Titulo: <span contenteditable="false">${serie.titulo}</span></p>`,
                 `<p>Gênero: <span contenteditable="false">${serie.genero}</span></p>`,
                 `<p>Plataforma: <span contenteditable="false">${serie.plataforma}</span></p>`,
                 `<p>Assistida:  <span contenteditable="false">${serie.assistida}</span></p>`
               ];
     
               infos.forEach(info =>{
                    div.innerHTML += info;
               });
     
               const botaoEditar = document.createElement("button");
               botaoEditar.classList.add("botaoEditar");
               botaoEditar.textContent = "Editar";
     
               botaoEditar.addEventListener("click",() => {
                    const spans = div.querySelectorAll("span");
                    spans.forEach(span => {
                         span.setAttribute("contenteditable", "true");
                    });

                    div.classList.add("editando"); // Adiciona a classe temporária
                 botaoEditar.style.display = "none"; // Esconde o botão de editar
                 saveButton.style.display = "inline-block"; // Mostra o botão de salvar
               });
     
               const saveButton = document.createElement("button");
               saveButton.classList.add("botaoSalvar");
               saveButton.textContent = "Salvar";
               saveButton.style.display = "none"; // Inicialmente esconde o botão de salvar
               
               saveButton.addEventListener("click", () =>{
                 const spans = div.querySelectorAll("span");
                 spans.forEach(span => {
                   span.removeAttribute("contenteditable");
                 });
                 
                 div.classList.remove("editando"); // Remove a classe de edição temporária
                 botaoEditar.style.display = "inline-block"; // Mostra o botão de editar
                 saveButton.style.display = "none"; // Esconde o botão de salvar
               });
     
               const deleteButton = document.createElement("button");
               deleteButton.classList.add("botaoExcluir");
               deleteButton.textContent = "Excluir";
         
               deleteButton.addEventListener("click", function() {
                    console.log("o index do que foi clicado foi esse aqui:", index);
                    catalogo.splice(index, 1); // Remove o item da lista
                    serie.atualizarLista();
               });
     
               div.appendChild(botaoEditar);
               div.appendChild(saveButton);
               div.appendChild(deleteButton);
     
               return div;
          }

          // atualizarLista() {
          //      const listaSeries = document.getElementById("listaSeries");
          //      listaSeries.innerHTML = ""; // Limpa a lista atual

          //      catalogo.forEach((serie, index) =>{
          //           const li = document.createElement("li");
          //           li.appendChild(this.criarDivEditavel(serie, index));
          //           listaSeries.appendChild(li);
          //      });
          //      }
}
     

             document.addEventListener("DOMContentLoaded",function (){
               const form = document.getElementById("formulario");
               
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

                    const newTitulo = titulo.value;
                    const newGenero = genero.value;
                    const newPlataforma = plataforma.value;

                 if(newTitulo && newGenero && newPlataforma && newAssistida){
                    const newSerie = new Serie(newTitulo,newGenero,newPlataforma,newAssistida);
                    catalogo.push(newSerie);
                    titulo.value="";
                    genero.value="";
                    plataforma.value="";
                    assistida.value="";
                    newSerie.atualizarLista();
                 }
             });
             const serie = new Serie();
             serie.atualizarLista();

            // console.log(serie);
     });


     /*
     let catalogo = [
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
     
          let calls = new Serie("Calls","Suspense/Terror","Apple TV+","Sim");
          let goodPlace = new Serie("The good Place", "Comédia", "Netflix","Sim");
          let gilmore = new Serie("Gilmore Girls","Drama","Netflix","Não");
          let only = new Serie("Only muders in the building","comédia", "Star+","Não");
     
          catalogo.push(calls);
          catalogo.push(goodPlace);
          catalogo.push(gilmore);
          catalogo.push(only);
     
          console.log(catalogo)
     
     
     
    
     
     
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
                    `<p>Titulo: <span contenteditable="true">${serie.titulo}</span></p>`,
                 `<p>Gênero: <span contenteditable="true">${serie.genero}</span></p>`,
                 `<p>Plataforma: <span contenteditable="true">${serie.plataforma}</span></p>`,
                 `<p>Assistida:  <span contenteditable="true">${serie.assistida}</span></p>` 
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
                         span.setAttribute("contenteditable", "true");
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
                   span.removeAttribute("contenteditable");
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
     
     */

     /*
     metodos:
     atualizarLista()
     criarDivEditavel(serie,index)
     (outras que pode ser acrescentado pra quebrar o código em mais funções)
     criarBotaoEditar()
     criarBotaoSlvar()
     criarBotaoDeletar()
     */


     
     
     
     