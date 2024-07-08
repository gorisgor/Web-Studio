document.addEventListener('DOMContentLoaded', function () {
    const menuOpenBtn = document.querySelector('.menu');
    const menuCloseBtn = document.querySelector('.modal-close-btn');
    const mobMenu = document.querySelector('.backdrop');

    function openMenu() {
      mobMenu.classList.add('is-open');
    }
  
    function closeMenu() {
      mobMenu.classList.remove('is-open');
      console.log('here');
    }
  
    menuOpenBtn.addEventListener('click', openMenu);
  

    menuCloseBtn.addEventListener('click', closeMenu);
  });
  