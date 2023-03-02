const container = document.querySelector('.container');
const imgContainer = document.querySelectorAll('.img-container');


container.addEventListener('click',function(e){
    

    if(e.target.closest('.img-container').classList.contains('img-container')){
        imgContainer.forEach(function(el){
            if(el.classList.contains('img-container-1')){
                el.classList.remove('img-container-1');
                e.target.closest('.img-container').classList.add('img-container-1');
            }
        });
    }
    /*
    */
});

