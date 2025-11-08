import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// obtiene fecha actual
const now = new Date();
// formatea la fecha y el idioma
const formatted = format(now, "EEEE, d 'de' MMMM 'de' yyyy, HH:mm", { locale: es });

// inserta en el DOM
const fechaSpan = document.getElementById('fecha');
if (fechaSpan) fechaSpan.textContent = formatted;
