// =========================================== HOME SWIPER ===================================================

const swiper = new Swiper('.home-swiper', {
  // ??? what is it
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ===================================== CHANGE BACKGROUND HEADER ===========================================

function scrollHeader() {
  const header = document.querySelector('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
