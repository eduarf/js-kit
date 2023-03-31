let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        smoothTrans();
        htmlElement.setAttribute('theme-mode', 'dark');
    }
    else {
        smoothTrans();
        htmlElement.setAttribute('theme-mode', 'light');
    }
});

let smoothTrans = () => {
    htmlElement.classList.add('transition');
    window.setTimeout(() => {
        htmlElement.classList.remove('transition');
    }, 1000);
};