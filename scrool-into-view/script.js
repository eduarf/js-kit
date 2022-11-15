const links = document.querySelectorAll('.link');

links.forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault();
       const target = e.target.getAttribute('href');
       document.querySelector(`${target}`).scrollIntoView({
        behavior: 'smooth',
       });
    });
});

// farklı bir yöntem var onunda mantığını ksıaca yazıyoru ancak bu yöntem kadar performanslı değildir.

/*
const sectionTarget = document.querySelector('#section-1');
btn.addEventListener('click',function(){
    const section1 = sectionTarget.getBoundingClientRect(); // bu kod section-1'in konumunu alıyor x ve y olarak

    window.scrollTo({
        left: section1.left + window.pageXoffset,
        top: section1.top + window.pageYoffset, // ille sayfanın en üstünden tıklamak zorunda değiliz onun için
        // topladık böyle toplamasaydık tam olarak section'a gidemezdik
        behavior: 'smooth',
    });
});




*/