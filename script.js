
/* =========================
   CARROSSEL
========================= */

const carrossel = document.querySelector('.carrossel');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

btnNext.addEventListener('click', () => {
  carrossel.scrollLeft += 300;
});

btnPrev.addEventListener('click', () => {
  carrossel.scrollLeft -= 300;
});


/* =========================
   DROPDOWN
========================= */

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown');

dropdownBtn.addEventListener('click', (e) => {

  e.stopPropagation();

  dropdown.classList.toggle('active');
});

/* FECHAR AO CLICAR FORA */

document.addEventListener('click', () => {
  dropdown.classList.remove('active');
});

/* IMPEDIR FECHAMENTO AO CLICAR DENTRO */

dropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});