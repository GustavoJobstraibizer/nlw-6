export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/sw.js")
        .then(function (registration) {
          console.log("ServiceWorker registrado com sucesso");
        })
        .catch(function (err) {
          console.log("Erro ao registrar serviceWorker: ", err.message);
        });
    });
  }
};
