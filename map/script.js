const mapEl = document.getElementById('map');


if(navigator.geolocation){
    // ilk fonksyion kullanıcı izin verdiyse. 2. fonksiyon kullanıcı izin vermediyse
    // eğer izin verdiyse fonskyionumuz bize default bir position değeri veriyor
    navigator.geolocation.getCurrentPosition(function(position){
        // latitude --> enlem
        const latitude = position.coords.latitude;
        // longitude --> boylam
        const longitude = position.coords.longitude;
        // console.log(latitude);
        // console.log(longitude);
        const coords = [latitude, longitude];
        // aldığımız enlem ve boylam bilgilerini giriyoruz. 
        // 13 sayısı haritanın nekadar yakın/uzak görüleceğini bilidriyor.
        // uzaklık artarsa harita görüşümüz genişler
        const map = L.map('map').setView(coords, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker(coords).addTo(map)
        .bindPopup('işte buradasın!')
        .openPopup();
    }, function(){  
        alert('Neden izin vermedin bana :/')
    });
}
else {
    alert('Tarayıcınız desteklemiyor.');
}