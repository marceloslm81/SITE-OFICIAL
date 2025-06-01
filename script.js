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

document.addEventListener('DOMContentLoaded', function () {
    const whatsappForm = document.getElementById('whatsappForm');

    whatsappForm.addEventListener('submit', function (event) {
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

document.addEventListener('DOMContentLoaded', function () {
    // Pegando referências dos elementos
    const openPriceTableBtn = document.getElementById('openPriceTableBtn');
    const priceModal = document.getElementById('priceModal');
    const closeButton = document.querySelector('.close-button');

    // Suas informações de Whatsapp
    const whatsappNumber = '5511943219223';
    const defaultMessage = 'Olá! Gostaria de solicitar um orçamento para um projeto de site.';


    // Quando o botão 'Ver Tabela de Preços' é clicado, abre o modal
    openPriceTableBtn.addEventListener('click', function () {
        priceModal.style.display = 'flex'; // Altera para 'flex' para centralizar com CSS
    });

    // Quando o botão de fechar (x) é clicado, fecha o modal
    closeButton.addEventListener('click', function () {
        priceModal.style.display = 'none';
    });

    // Quando o usuário clica fora do modal, fecha o modal
    window.addEventListener('click', function (event) {
        if (event.target == priceModal) {
            priceModal.style.display = 'none';
        }
    });

    // Opcional: Adicionar funcionalidade aos botões de "Solicitar Orçamento"
    const callToActionButtons = document.querySelectorAll('.call-to-action-btn');
    
    if (callToActionButtons.length > 0) { // Verifica se há botões para iterar
        callToActionButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Pega o nome do projeto do título (h3) do cartão (project-card) pai
                const projectCard = this.closest('.project-card');
                let projectName = "um projeto de site"; // Valor padrão caso não encontre o nome

                if (projectCard) {
                    const h3Element = projectCard.querySelector('h3');
                    if (h3Element) {
                        projectName = h3Element.textContent;
                    }
                }

                // Monta a mensagem pré-definida para o WhatsApp
                // 'encodeURIComponent' é crucial para que a mensagem seja formatada corretamente na URL
                const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no projeto "${projectName}". Poderíamos conversar sobre um orçamento?`);

                // Cria o link direto para o WhatsApp
                // O formato 'wa.me' é o padrão oficial e mais recomendado
                const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

                // Abre o link do WhatsApp em uma nova aba/janela do navegador
                window.open(whatsappLink, '_blank');

                // Opcional: Fechar o modal de preços depois de abrir o WhatsApp
                if (priceModal) {
                    priceModal.style.display = 'none';
                }
            });
        });
    }
});