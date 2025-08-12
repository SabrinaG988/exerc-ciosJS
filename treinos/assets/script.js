function addTarefa() {
let inputTarefa = document.getElementById('input')
let tarefa = inputTarefa.value.trim()

let lista = document.getElementById('ul')
let novaTarefa = document.createElement('li')


novaTarefa.addEventListener('click', function () {
   


   
 if (novaTarefa.style.textDecoration === "line-through") {
   novaTarefa.style.textDecoration = ""
   novaTarefa.style.backgroundColor = "rgb(248, 221, 221)"
   
 }
 else {
   novaTarefa.style.textDecoration = "line-through"
   novaTarefa.style.backgroundColor = "lightgreen"
 }


} )


novaTarefa.innerHTML = tarefa + "<span onclick='deletarTarefa(this)'>❌</span>"
lista.appendChild(novaTarefa)

inputTarefa.value = ""
}



function deletarTarefa(ram) {
   ram.parentElement.remove()

}

let botaoMudar = document.getElementById('mudar')
let div = document.getElementById('container')
let texto = document.getElementById('nome')
let darkMode = false


botaoMudar.addEventListener('click', function() {
     darkMode = !darkMode
     texto.style.color = 'white';
     botaoMudar.style.backgroundColor = 'rgba(122, 135, 146, 1)';
     document.body.style.backgroundColor = "grey"

     if (darkMode)  {
      div.style.backgroundColor = '#252525';
      texto.style.color = 'white';
      botaoMudar.style.backgroundColor = 'rgba(122, 135, 146, 1)';
      document.body.style.backgroundColor = 'grey';
     }
     else {
      div.style.backgroundColor = 'rgb(255, 255, 255)'; 
      texto.style.color = 'black';
      botaoMudar.style.backgroundColor = 'rgb(156, 214, 196';
      document.body.style.backgroundColor = 'rgb(187, 187, 243';
    }
     }
     

)


   
