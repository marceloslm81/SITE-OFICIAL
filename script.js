 // Script para controlar os modais
 const modalTargets = document.querySelectorAll('[data-modal-target]');
 const modals = document.querySelectorAll('.modal');
 const modalCloses = document.querySelectorAll('.modal-close');

 modalTargets.forEach(target => {
     target.addEventListener('click', () => {
         const modal = document.querySelector(target.getAttribute('data-modal-target'));
         if (modal) {
             modal.style.display = 'block';
         }
     });
 });

 modalCloses.forEach(closeButton => {
     closeButton.addEventListener('click', () => {
         const modal = closeButton.closest('.modal');
         if (modal) {
             modal.style.display = 'none';
         }
     });
 });

 window.addEventListener('click', (event) => {
     if (event.target.classList.contains('modal')) {
         event.target.style.display = 'none';
     }
 });

 // Script para o menu mobile
 const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
 const primaryNavigation = document.querySelector('#primary-navigation');

 mobileNavToggle.addEventListener('click', () => {
     const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';
     primaryNavigation.setAttribute('data-visible', !isVisible);
     mobileNavToggle.setAttribute('aria-expanded', !isVisible);
 });

 document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsappForm');

    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = encodeURIComponent(document.getElementById('wa_name').value);
        const email = encodeURIComponent(document.getElementById('wa_email').value);
        const mensagem = encodeURIComponent(document.getElementById('wa_message').value);
        const numeroWhatsApp = "5511943219223"; // Substitua pelo seu número

        const textoWhatsApp = `Olá! Seguem os dados do formulário:\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;

        // Abre o link do WhatsApp em uma nova aba
        window.open(linkWhatsApp, '_blank');
    });
});


