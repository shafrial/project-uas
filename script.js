const logo = document.querySelector('.logo img');
const kotajatim = document.querySelectorAll('.kotajatim li');

kotajatim.forEach(item => {
    item.addEventListener('mouseover', function() {
        const city = this.getAttribute('data-city');
        // Ganti src gambar sesuai dengan kota yang di-hover
        if (city === 'Surabaya') {
            logo.src = 'assets/surabaya.jpg';
        } else if (city === 'Malang') {
            logo.src = 'assets/malang.jpg';
        } else if (city === 'Kediri') {
            logo.src = 'assets/kediri.jpg';
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
