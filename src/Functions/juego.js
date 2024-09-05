

let boton1 = document.getElementById('A')
let boton2 = document.getElementById('B')
let boton3 = document.getElementById('C')
let continuar = document.getElementById('continuar')
function Temporizador(){
    let segundos = 10;

    function Actualizar(){
        document.getElementById("contador").innerText = segundos;
    }


function decrementarSegundo(){
    if(segundos > 0){
        segundos--;
        Actualizar()
    }
    else{
      clearInterval(interval)
      document.getElementById("A").disabled = true
      document.getElementById("A").disabled = true
      document.getElementById("A").disabled = true
      boton1.style.backgroundColor = "#c4475c"
      boton2.style.backgroundColor = "#c4475c"
      boton3.style.backgroundColor = "#c4475c"
      continuar.style.visibility = "visible"
      
    }
}

interval = setInterval(decrementarSegundo, 700);

}

window.onload = Temporizador;

let getAnswer = document.querySelector('.hiddenSpan')
let ID = getAnswer.id



const Options = document.querySelectorAll(".option")
Options.forEach(option =>{
    option.addEventListener("click", ()=>{
        if(option.value == ID){
            option.style.backgroundColor = "green"
        }else{
            option.style.backgroundColor = "red"
        }
        document.getElementById("A").disabled = true
        document.getElementById("B").disabled = true
        document.getElementById("C").disabled = true
        clearInterval(interval)
        continuar.style.visibility = "visible"
    })
})