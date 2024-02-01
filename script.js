        document.getElementById('facebookLink').addEventListener('click', function(event) {
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
        


        // ==UserScript==
// @name   Descarga automatica PDF
// @version  0.1
// @description   Descarga automaticamente la página actual como PDF
// @author   Bard
// @match   https://www.ejemplo.com/*
// @grant   none
// ==/UserScript==

(function() {
  function downloadPDF() {
    // ... código de la función downloadPDF() ...
  }

  // Ejecutar la descarga al cargar la página
  window.addEventListener('load', downloadPDF);
})();
