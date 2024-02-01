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



     // Para descargar en formato PDF
    function downloadPDF() {
      // Load print-optimized CSS
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'print-style.css'; // Asegúrate de que print-style.css esté presente
      link.media = 'all';

      // Clone the body and apply the print stylesheet
      var body = document.body.cloneNode(true);
      body.appendChild(link);
      
      var opt = {
          margin:       [15, 15, 15, 15],
          filename:     'CV-Hector Daniel-Ayarachi Fuentes.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().from(body).set(opt).save();
      
      return false; // Prevenir el comportamiento predeterminado del enlace
  }