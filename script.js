// Inicializar EmailJS con tu Public Key
(function() {
  emailjs.init("U4zLAvJN3e-dKYECdzdXI");
})();

const form = document.getElementById('vozForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Recopilar datos del formulario
  const formData = {};
  new FormData(form).forEach((value, key) => formData[key] = value);

  // Guardar respaldo local
  let mensajes = JSON.parse(localStorage.getItem('tuVozMensajes')) || [];
  mensajes.push(formData);
  localStorage.setItem('tuVozMensajes', JSON.stringify(mensajes));

  // Enviar por EmailJS
  emailjs.send("service_kmho6zu", "EBeRPR9ySo35NWG6H", formData)
    .then(() => {
      alert("💖 Tu mensaje fue enviado con éxito. Gracias por confiar en nosotros.");
      form.reset();
    }, (err) => {
      alert("❌ Ocurrió un error al enviar. Intenta nuevamente.");
      console.log(err);
    });
});