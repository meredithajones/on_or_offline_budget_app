//Registering our service worker (Boilerplate code copied from Google web fundamentals Service Worker Registration)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }