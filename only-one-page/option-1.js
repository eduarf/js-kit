// eğer farklı bir sekmede açılırsa sayfa diğer sayfadaki oturumun sonlanma olayı

window.onload = function(){
    let tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = Math.random();
    if(typeof localStorage.tabId === 'undefined'){
        localStorage.tabId = tabId;
    }
    //  tabId != localStorage.tabId başka sekmede açık anlamına gelir.
    if(tabId != localStorage.tabId){
        document.body.innerText = 'Aktif bir sekmede açık';
    }

    window.onbeforeunload = function() {
        if(tabId == localStorage.tabId) delete localStorage.tabId;
    };
};