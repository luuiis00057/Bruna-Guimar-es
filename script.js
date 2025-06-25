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
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;
  let total = images.length;
  let isTransitioning = false;

  function showSlide(i) {
    if (isTransitioning) return;
    isTransitioning = true;

    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${i * slideWidth}px)`;

    setTimeout(() => {
      isTransitioning = false;
    }, 850);
  }

  function nextSlide() {
    index = (index + 1) % total;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide(index);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 4000);

  // Ajusta o slide em resize pra manter alinhamento
  window.addEventListener('resize', () => showSlide(index));

