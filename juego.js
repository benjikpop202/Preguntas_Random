
const marco = document.getElementById("marco");
const boton1 = document.getElementById("a");
const boton2 = document.getElementById("b");
const boton3 = document.getElementById("c");
let continuar = document.getElementById("continuar");
let interval




let pregunta1 = {"pregunta":"¿como se llama el grupo de bighit ent que debuto en 2019?","A":"tomorrow by together","B":"itzy","C":"ninguna de las anteriores","ANSWER":"a"};
let pregunta2 = {"pregunta":"¿cuantos mundiales tiene argentina?","A":"3 titulos","B":"2 titulos","C":"5 titulos","ANSWER":"a"};
let pregunta3 = {"pregunta":"fundador de microsoft","A":"marck zunckerberg","B":"steve jobs","C":"bill gates","ANSWER":"c"};
let pregunta4 = {"pregunta":"¿quien hizo la cancion la isla bonita?","A":"abba","B":"maddona","C":"thalia","ANSWER":"b"};
let pregunta5 = {"pregunta":"¿en una funcion lineal que letra se la conoce a la pendiente?","A":"letra b","B":"letra m","C":"letra c","ANSWER":"b"};
 
let preguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5]; 





function boton1Verde(){
    boton1.style.backgroundColor = "#008000"
    document.getElementById("b").disabled = true
    document.getElementById("c").disabled = true
    continuar.style.visibility = "visible"
    clearInterval(interval)
}
   

function boton2Verde(){
    boton2.style.backgroundColor = "#008000"
    document.getElementById("a").disabled = true
    document.getElementById("c").disabled = true
    continuar.style.visibility = "visible"
    clearInterval(interval)
   
    
};

function boton3Verde(){
    boton3.style.backgroundColor = "#008000"
    document.getElementById("a").disabled = true
    document.getElementById("b").disabled = true
    continuar.style.visibility = "visible"
    clearInterval(interval)
   
};

//red
function boton1Rojo(){
    boton1.style.backgroundColor = "#ff0000"
    document.getElementById("b").disabled = true
    document.getElementById("c").disabled = true
    continuar.style.visibility = "visible"
    clearInterval(interval)
   
    
};

function boton2Rojo(){
    boton2.style.backgroundColor = "#ff0000"
    document.getElementById("a").disabled = true
    document.getElementById("c").disabled = true
    continuar.style.visibility = "visible"
    clearInterval(interval)
   
    

};

function boton3Rojo(){
    boton3.style.backgroundColor = "#ff0000"
    document.getElementById("a").disabled = true
    document.getElementById("b").disabled = true
    continuar.style.visibility = "visible"
    clearInterval(interval)
   
    
};


function Prandom(arreglo){
 let m = Math.floor(Math.random() * arreglo.length);
 let random = arreglo[m];
 marco.innerHTML = random.pregunta;
 boton1.innerHTML = random.A;
 boton2.innerHTML = random.B;
 boton3.innerHTML = random.C;
 document.getElementById("continuar").disabled = true
 if(random.ANSWER == "a"){

    boton1.addEventListener("click",boton1Verde);
    boton2.addEventListener("click",boton2Rojo);
    boton3.addEventListener("click",boton3Rojo);

    
    
    
 }else if(random.ANSWER == "b"){

    boton1.addEventListener("click",boton1Rojo);
    boton2.addEventListener("click",boton2Verde);
    boton3.addEventListener("click",boton3Rojo);
    
    

 } else if(random.ANSWER == "c"){
    
    boton1.addEventListener("click",boton1Rojo);
    boton2.addEventListener("click",boton2Rojo);
    boton3.addEventListener("click",boton3Verde);
    
    

 }

};



Prandom(preguntas);

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
      document.getElementById("a").disabled = true
      document.getElementById("b").disabled = true
      document.getElementById("c").disabled = true
      boton1.style.backgroundColor = "#c4475c"
      boton2.style.backgroundColor = "#c4475c"
      boton3.style.backgroundColor = "#c4475c"
      continuar.style.visibility = "visible"
      
    }
}

interval = setInterval(decrementarSegundo, 1000);

}

window.onload = Temporizador;






