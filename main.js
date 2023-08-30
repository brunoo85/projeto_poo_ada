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
     

     const serie={
          titulo: titulo.value,
          genero: genero.value,
          plataforma: plataforma.value,
          assistida: assistida.value,
     }

     if(serie){
          series.push(serie)
          titulo.value="";
          genero.value="";
          plataforma.value="";
          assistida.value="";

          updateItemList();
     }

     function updateItemList() {
          listIn.innerHTML = ""; // Limpa a lista atual
          
          // Preenche a lista com os itens atualizados
          for (const serie of series) {
               console.log(serie);
            const li = document.createElement("li");
            li.innerHTML = `
            <div>
            <p> Titulo: ${serie.titulo}</p>
            <p> Gênero: ${serie.genero}</p>
            <p> Plataforma: ${serie.plataforma}</p>
            <p> Assistida: ${serie.assistida}</p>
            <button> Alterar</button>
       </div>`;
            listIn.appendChild(li);
          }
        }
        
        // Exibe a lista inicial ao carregar a página
        updateItemList();
})





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