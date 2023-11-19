const logo = document.querySelector('.logo img');
const kotajatim = document.querySelectorAll('.kotajateng li');

kotajatim.forEach(item => {
    item.addEventListener('mouseover', function() {
        const city = this.getAttribute('data-city');
        // Ganti src gambar sesuai dengan kota yang di-hover
        if (city === 'Yogyakarta') {
            logo.src = 'assets/yogyakarta.jpg';
        } else if (city === 'Semarang') {
            logo.src = 'assets/semarang.jpg';
        } else if (city === 'Solo') {
            logo.src = 'assets/solo.jpg';
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
