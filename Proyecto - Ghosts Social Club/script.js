let recepcionRespuesta1 = document.getElementById("respuesta1");
let recepcionRespuesta2 = document.getElementById("respuesta2");
let recepcionRespuesta3 = document.getElementById("respuesta3");
let recepcionRespuesta4 = document.getElementById("respuesta4");
let recepcionRespuesta5 = document.getElementById("respuesta5");
let recepcionRespuesta6 = document.getElementById("respuesta6");
let recepcionRespuesta7 = document.getElementById("respuesta7");

let formulariosLlenos = true;

document.addEventListener("DOMContentLoaded", () => {
  const respuestas = {};

    function comprobarFormulariosLlenos() {
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
    }

  function enviar() {
    comprobarFormulariosLlenos();
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

  window.enviar = enviar;
  window.resetear = resetear;
});

function evaluarRespuesta1(){

}

//FUNCION PARA NORMALIZAR TEXTO (PASAR A MINUSCULAS Y RECONOCER CARACTERES ESPECIALES)
function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
