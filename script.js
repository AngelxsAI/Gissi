// Inicializar EmailJS
(function() {
  emailjs.init("EBeRPR9ySo35NWG6H"); // Public Key
})();

const form = document.getElementById('form');
const btn = document.getElementById('button');

// Guardar temporalmente los datos por si el usuario sale sin enviar
form.addEventListener('input', () => {
  const formData = new FormData(form);
  const data = {};
  formData.forEach((v, k) => data[k] = v);
  localStorage.setItem('mensajePendiente', JSON.stringify(data));
});

// Detectar cuando intenta salir de la página
window.addEventListener('beforeunload', (event) => {
  const savedData = localStorage.getItem('mensajePendiente');
  if (savedData) {
    const data = JSON.parse(savedData);
    enviarMensaje(data);
    localStorage.removeItem('mensajePendiente');
  }
  // Aquí podrías dejar el espacio para eliminar el mensaje o alerta
});

// Envío manual del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Enviando...';

  const serviceID = 'service_kmho6zu';
  const templateID = 'template_xr7g2kl';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      localStorage.removeItem('mensajePendiente');
      form.reset();

      
function enviarMensaje(data) {
  const serviceID = 'service_kmho6zu';
  const templateID = 'template_xr7g2kl';

  emailjs.send(serviceID, templateID, data)
    .then(() => {
      console.log('Mensaje enviado automáticamente antes de salir.');
    })
    .catch((err) => {
      console.error('Error al enviar automáticamente:', err);
    });
}