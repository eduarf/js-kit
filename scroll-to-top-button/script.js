const scroll = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    scroll.classList.toggle('active', window.scrollY > 200);
});

scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});