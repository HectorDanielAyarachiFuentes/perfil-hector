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
