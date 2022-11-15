// eğer farklı bir sekmede açılırsa sayfa diğer sayfadaki oturumun sonlanma olayı

window.onload = function(){
    let tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = Math.random();
    localStorage.tabId = tabId;
    let interval = setInterval(function(){
        // yeni bir sekmede açılınca çalışır
        console.log('Kontrol ediliyor...');
        if(tabId != localStorage.tabId){
            clearInterval(interval);
            catchError();
        }
    },1000);

    function catchError(){
        document.body.innerText = 'Bu sekmede oturum sonlandı';
    }
};