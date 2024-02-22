// script.js
function calcular() {
    var precioBase = parseFloat(document.getElementById("precioBase").value);
    var meses = parseInt(document.getElementById("meses").value);
    var inflacion = parseFloat(document.getElementById("inflacion").value) / 100;
    var devaluacion = parseFloat(document.getElementById("devaluacion").value) / 100;
    var mesActual = parseInt(document.getElementById("mesActual").value);
  
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
  
    for (var i = 0; i < meses; i++) {
      var mes = obtenerNombreMes((mesActual + i) % 12);
      var nuevaInflacion = inflacion + (devaluacion * (i % 1 === 0 ? 1 : 0)); // Sumamos la devaluación a la inflación cada 1 mes
      var nuevoPrecio = precioBase * Math.pow(1 + nuevaInflacion, i);
      var p = document.createElement("p");
      p.textContent = "Precio en " + mes + ": $" + nuevoPrecio.toFixed(2);
      resultados.appendChild(p);
    }
  }
  
  function obtenerNombreMes(numeroMes) {
    var meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[numeroMes];
  }
  
  function resetear() {
    document.getElementById("precioBase").value = "";
    document.getElementById("meses").value = "";
    document.getElementById("inflacion").value = "";
    document.getElementById("devaluacion").value = "";
    document.getElementById("mesActual").value = "1"; // Reiniciamos al mes de enero por defecto
    document.getElementById("resultados").innerHTML = "";
  }
  

  