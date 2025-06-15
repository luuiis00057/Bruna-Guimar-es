document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  const formulario = document.getElementById('formulario-contato');

  formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = `Olá, me chamo *${nome}*.


Mensagem:
${mensagem}`;

    const textoCodificado = encodeURIComponent(texto);

    const numeroWhatsApp = '556282758178';
    const url = `https://wa.me/556282758178?text=${textoCodificado}`;

    window.open(url, '_blank');
  });
});

 const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
