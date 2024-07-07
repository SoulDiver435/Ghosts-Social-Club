 const respuestas = {};

let fechaYHora= "";
let contexto= "";
let persona= "";
let feedbackResp="";
let feedbackTotal = "";


let recepcionRespuesta1 = document.getElementById("respuesta1");
let recepcionRespuesta2 = document.getElementById("respuesta2");
let recepcionRespuesta3 = document.getElementById("respuesta3");
let recepcionRespuesta4 = document.getElementById("respuesta4");
let recepcionRespuesta5 = document.getElementById("respuesta5");
let recepcionRespuesta6 = document.getElementById("respuesta6");
let recepcionRespuesta7 = document.getElementById("respuesta7");

let contenedorResultados= document.getElementById("resultadosCont")

let formulariosLlenos = true;

   /* function comprobarFormulariosLlenos() {
      if (
      document.getElementById("respuesta1").value === "" ||
      document.getElementById("respuesta2").value === "" ||
      document.getElementById("respuesta3").value === "" ||
      document.getElementById("respuesta4").value === "" ||
      document.getElementById("respuesta5").value === "" ||
      document.getElementById("respuesta6").value === "" ||
      document.getElementById("respuesta7").value === ""
      ) {
        formulariosLlenos = false;
      } else {
        formulariosLlenos = true;
      }
    }*/

  function enviar() {
   // comprobarFormulariosLlenos();
    if (formulariosLlenos === true) {
      respuestas.Pregunta1 = document.getElementById("respuesta1").value;
      respuestas.Pregunta2 = document.getElementById("respuesta2").value;
      respuestas.Pregunta3 = document.getElementById("respuesta3").value;
      respuestas.Pregunta4 = document.getElementById("respuesta4").value;
      respuestas.Pregunta5 = document.getElementById("respuesta5").value;
      respuestas.Pregunta6 = document.getElementById("respuesta6").value;
      respuestas.Pregunta7 = document.getElementById("respuesta7").value;

      console.log({ respuestas });
      alert("¡Respuestas enviadas!");
    } else {
      alert(`Falta rellenar algunos campos`);
    }
    console.log(formulariosLlenos);
  }

  function resetear() {
    document.getElementById("respuesta1").value = "";
    document.getElementById("respuesta2").value = "";
    document.getElementById("respuesta3").value = "";
    document.getElementById("respuesta4").value = "";
    document.getElementById("respuesta5").value = "";
    document.getElementById("respuesta6").value = "";
    document.getElementById("respuesta7").value = "";

    console.log("Formulario reseteado.");
  }

function evaluarRespuesta1(feedbackTotal1){
  feedbackTotal1=""
let respuesta= respuestas.Pregunta1;
let textoNormalizado=normalizarTexto(respuesta);
if (textoNormalizado.includes("bar")){
  //alert(`holaaaaaa`);
  feedbackResp= "Un bar puede ser un lugar estimulante, pero también depende de tu personalidad. Recuerda que es un lugar que puede ser bullicioso y caótico. <br> <br>"
  feedbackTotal1 += feedbackResp;
}

if (textoNormalizado.includes("beso") &&textoNormalizado.includes("mejilla")){
  //alert(`holaaaaaa`);
  feedbackResp= "Un beso en la mejilla puede ser un buen indicio. Indica cercanía, confianza y la posibilidad de cierta atracción. <br> <br>"
feedbackTotal1 += feedbackResp;
}

if (textoNormalizado.includes("sonrisa") || textoNormalizado.includes("sonrio")|| textoNormalizado.includes("sonreimos")){
  //alert(`holaaaaaa`);
  feedbackResp= "Es una muy buena señal que hayan sonreído. Aquello indica mucha apertura y entusiasmo por las expectativas que ambos pueden tener entre ustedes. <br> <br> "
feedbackTotal1 += feedbackResp;
}

if (textoNormalizado.includes("animada") || textoNormalizado.includes("animado")){
  //alert(`holaaaaaa`);
  feedbackResp= "¡El estar animado ya es un paso muy grande! Demuestra que a pesar de los nervios están dispuestos a pasar un buen rato y compartir juntos. <br> <br>"
feedbackTotal1 += feedbackResp;
}

if (textoNormalizado.includes("playa")){
  //alert(`holaaaaaa`);
  feedbackResp= "La playa y el mar son excelentes lugares de encuentro. Hay muchas posibilidades ahí; desde tomar o comer algo ligero, hasta tomar fotografías geniales o selfies que plasmen el momento. ¡Una gran oportunidad y acierto! <br> <br>"
feedbackTotal1 += feedbackResp;
}

if (textoNormalizado.includes("invierno")|| (textoNormalizado.includes("frio"))){
  //alert(`holaaaaaa`);
  feedbackResp= "Los climas fríos suelen complicar a veces las interacciones y disminuir los ánimos o el entusiasmo. Sin embargo, puede también ser una oportunidad para establecer cierto contacto físico (si la persona te atrae). Una excusa perfecta para dar un buen abrazo. Otra opción puede ser ir a tomar algo caliente o ir a bailar, para entrar en calor. Con algo de creatividad se puede sacar provecho hasta de las situaciones más difíciles.   <br> <br>"
feedbackTotal1 += feedbackResp;
}

feedbackTotal += feedbackTotal1
}



function mostrarResultado(){
  evaluarRespuesta1();
  desglosarResultados();
}

function desglosarResultados(){
  let elementosOcultables = document.querySelectorAll(".elementoOcultable");
  
elementosOcultables.forEach(function(elemento) {
  elemento.style.display= 'none';
});
  
  let elementosVisibilizados= document.querySelectorAll(".resultadosVisibles");
  
elementosVisibilizados.forEach(function(elemento){
  elemento.style.display= 'block'
}
)
document.getElementById("btnVolverCont").style.display= 'flex';

document.getElementById("contDatosGenerales").style.display= 'none'

  contenedorResultados.innerHTML= feedbackTotal;

}

//FUNCION PARA NORMALIZAR TEXTO (PASAR A MINUSCULAS Y RECONOCER CARACTERES ESPECIALES)
function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  
  function volver(){
let elementosOcultables = document.querySelectorAll(".elementoOcultable");
  
elementosOcultables.forEach(function(elemento) {
  elemento.style.display= 'block';
});
  
  
let elementosVisibilizados= document.querySelectorAll(".resultadosVisibles");
  
elementosVisibilizados.forEach(function(elemento){
  elemento.style.display= 'none';
  
document.getElementById("btnVolverCont").style.display= 'none';
})

document.getElementById("contDatosGenerales").style.display= 'flex';
}

/*function toggleVisibilidad() {
  const elementosOcultables = document.querySelectorAll('.elementoOcultable');

  elementosOcultables.forEach(function(elemento) {
    // Verificar el estado actual de visibilidad
    const estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display');

    // Alternar la visibilidad basada en el estado actual
    if (estiloDisplay === 'none') {
      elemento.style.display = ''; // Vuelve al estado original (por defecto en CSS)
    } else {
      elemento.style.display = 'none';
    }
  });
  
  if(document.querySelector(".tituloPrincipalResultados").style.display==='none') {
    document.querySelector(".tituloPrincipalResultados").style.display='block';
  }
}*/




