const logo = document.querySelector('.logo img');
const kotajatim = document.querySelectorAll('.kotajatim li');

kotajatim.forEach(item => {
    item.addEventListener('mouseover', function() {
        const city = this.getAttribute('data-city');
        // Ganti src gambar sesuai dengan kota yang di-hover
        if (city === 'Banyuwangi') {
            logo.src = 'assets/banyuwangi.jpg';
        } else if (city === 'Malang') {
            logo.src = 'assets/malang.jpg';
        } else if (city === 'Kediri') {
            logo.src = 'assets/kediri.jpg';
        } else if (city === 'Gresik') {
            logo.src = 'assets/gresik.png';
        } else if (city === 'Jember') {
            logo.src = 'assets/jember.png';
        } else if (city === 'Pasuruan') {
            logo.src = 'assets/pasuruan.jpg';
        } else if (city === 'Ponorogo') {
            logo.src = 'assets/ponorogo.jpg';
        } else if (city === 'Blitar') {
            logo.src = 'assets/blitar.jpg';
        } else if (city === 'Sidoarjo') {
            logo.src = 'assets/sidoarjo1.jpg';
        } else if (city === 'Surabaya') {
            logo.src = 'assets/surabaya.jpg';
        }
        // Tampilkan gambar
        logo.style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
        // Sembunyikan gambar ketika kursor tidak lagi di atas daftar kota
        logo.src = 'assets/jatim.jpeg';
        logo.style.display = 'block';
    });
});
