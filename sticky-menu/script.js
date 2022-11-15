const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const callBack = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const observer = new IntersectionObserver(callBack, {
    threshold: 1,
});

observer.observe(header);