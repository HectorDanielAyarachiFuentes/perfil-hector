// funcion para que facebook se abra tanto en celulares como escritorio-inicio

document.getElementById('facebookLink').addEventListener('click', function (event) {
  // Evitar el comportamiento predeterminado del enlace
  event.preventDefault();

  // URL del perfil de Facebook
  var facebookProfileURL = 'https://www.facebook.com/HECTORDANIELAYARACHI';

  // Verificar si estamos en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Construir el enlace adecuado según el dispositivo
  var finalURL = isMobile ? 'fb://profile?id=HECTORDANIELAYARACHI' : facebookProfileURL;

  // Redirigir a la URL final
  window.open(finalURL, '_blank');
});
// funcion para que facebook se abra tanto en celulares como escritorio-fin
// funcion para que se descargue todo el contenido del html-incio
function downloadPDF() {
  // Retraso para cargar contenido dinámico
  setTimeout(() => {
    const element = window.print(); // Captura toda la página
    html2pdf(element, {
      margin: 10,
      filename: 'mi_curriculum.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' }
    });
  }, 1000);
}

// funcion para que se descargue todo el contenido del html-fin


// funcion para ocultar barra de contactos inicio

function toggleContacts() {
  var container = document.querySelector('.contact-container');
  // Alternar entre minimizar y expandir
  if (container.style.maxHeight && container.style.maxHeight === "20px") {
    container.style.maxHeight = "500px"; // Ajusta este valor según el contenido de tu barra de contactos
  } else {
    container.style.maxHeight = "20px";
  }
}
// funcion para ocultar barra de contactos fin
//<div class="contact-header" onclick="toggleContacts()">// ese html//

