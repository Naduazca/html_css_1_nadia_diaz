import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// obtiene fecha actual
const now = new Date();
// formatea la fecha y el idioma
const formatted = format(now, "EEEE, d 'de' MMMM 'de' yyyy, HH:mm", { locale: es });

// inserta en el DOM
const fechaSpan = document.getElementById('fecha');
if (fechaSpan) fechaSpan.textContent = formatted;

/*----------JAVASCRIPT Y DOM-------- */
  // Espera a que el documento esté listo
  window.onload = function() {
    var botones = document.getElementsByClassName("leer-mas");

    for (var i = 0; i < botones.length; i++) {
      botones[i].onclick = function() {
        var texto = this.parentNode.querySelector(".tarjeta__text");

        if (texto.style.display === "none" || texto.style.display === "") {
          texto.style.display = "block";
          this.textContent = "Leer menos";
        } else {
          texto.style.display = "none";
          this.textContent = "Leer más";
        }
      };
    }
  };

  purgecss({
  content: ['./index.html', './src/**/*.js'],
  css: ['./styles.css']
})
