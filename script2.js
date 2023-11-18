const logo = document.querySelector('.logo img');
const kotajatim = document.querySelectorAll('.kotajatim li');

kotajatim.forEach(item => {
    item.addEventListener('mouseover', function() {
        const city = this.getAttribute('data-city');
        // Ganti src gambar sesuai dengan kota yang di-hover
        if (city === 'Yogyakarta') {
            logo.src = 'yogyakarta.jpg';
        } else if (city === 'Semarang') {
            logo.src = 'semarang.jpg';
        } else if (city === 'Solo') {
            logo.src = 'solo.jpg';
        } 
        // Tampilkan gambar
        logo.style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
        // Sembunyikan gambar ketika kursor tidak lagi di atas daftar kota
        logo.src = '1698753199545.png';
        logo.style.display = 'block';
    });
});
