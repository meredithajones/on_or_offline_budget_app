//Registering our service worker (Boilerplate code copied from Google web fundamentals Service Worker Registration)
//if statement checks to see if the current browser supports service workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('public/service-worker.js')
      .then (() => console.log("service worker registered", reg))
      .catch(() => console.log ("service worker not registered"));
    });
  }
  