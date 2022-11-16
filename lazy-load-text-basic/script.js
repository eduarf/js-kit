
const paragraph = document.querySelectorAll(".p");
const callBack = (entries) => {
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            // Unobserve elemanlar bir kez gözlemlendikten sonra 2. kez gözlemlemez 
            // bu sayede performansı arttırırız 
            // ancak tekrar tekrar gözlemlenecek bir durum söz konusu ile kullanılmamalıdır.
            observer.unobserve(entry.target);
        }
    });
};
const options = {
  // thres hold tarhet'ımızın %kaçı görününce callBack fonksyionumuz tetiklenecek onu belirler.
  // 0-1 arası değer alır 1 -> 100% anlamına gelir.
  threshold: 0.2, // threshold'u dizi olarak tanımlayabiliriz. [0.2, 0.3, 0.6] gibi
};

const observer = new IntersectionObserver(callBack, options);


paragraph.forEach((element) => observer.observe(element) );
