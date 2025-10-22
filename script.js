// Inicializar EmailJS
(function() {
  emailjs.init("EBeRPR9ySo35NWG6H"); // Tu Public Key
})();

const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el reload

  btn.value = 'Enviando...';

  const serviceID = 'service_kmho6zu';     
  const templateID = 'template_xr7g2kl';   

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('✅ ¡Tu mensaje fue enviado con éxito! Gracias por confiar en nosotros.');
      form.reset();
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert('❌ Ocurrió un error al enviar.\n\n' + JSON.stringify(err));
      console.error('EmailJS error:', err);
    });
});