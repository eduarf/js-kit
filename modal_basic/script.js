const showButton = document.querySelector('.button');
const main = document.querySelector('.main');
const buttonX = document.querySelector('.button-x');


showButton.addEventListener('click', function(){
    main.classList.toggle('none');
});

document.addEventListener('click',function(e){
    if(e.target.classList.contains('main')){
        main.classList.toggle('none');
    }
});

buttonX.addEventListener('click',function(){
    main.classList.toggle('none');
});