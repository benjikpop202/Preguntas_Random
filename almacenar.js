const preguntas = require('./juego')

let pregunta = document.getElementById("pregunta")
let opcionA = document.getElementById("opcionA")
let opcionB = document.getElementById("opcionB")
let opcionC = document.getElementById("opcionC")
let opcionCorrecta = document.getElementById("correcto")
let enviar = document.getElementById("enviar")
let preguntaN = {}

function addQuestions(){
 if(pregunta !== "" && opcionA !== "" && opcionB !== "" && opcionC !== ""){
   preguntaN = {"pregunta":pregunta,"A":opcionA,"B":opcionB,"C":opcionC,"ANSWER":opcionCorrecta};
   preguntas.push(preguntaN);

 }
}


enviar.addEventListener("click",addQuestions)




