const slides = document.querySelector('.slider').children;
const indicatorImages = document.querySelector('.indicator').children;

for(let i = 0; i < indicatorImages.length; i++){
    indicatorImages[i].addEventListener('click', function() {
        for(let j = 0; j < indicatorImages.length; j++){
            indicatorImages[j].classList.remove('active');
        }
        this.classList.add('active');

        const id = this.getAttribute('data-id');

        for(let k = 0; k < slides.length; k++){
            slides[k].classList.remove('active');
        }
        slides[id].classList.add('active');
    });
}