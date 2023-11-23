const logo = document.querySelector('.logo img');
const kotajateng = document.querySelectorAll('.kotajateng li');

kotajateng.forEach(item => {
    item.addEventListener('mouseover', function() {
        const city = this.getAttribute('data-city');
        // Ganti src gambar sesuai dengan kota yang di-hover
        if (city === 'Jepara') {
            logo.src = 'assets/jepara1.jpg';
        } else if (city === 'Demak') {
            logo.src = 'assets/demak.jpeg';
        } else if (city === 'Klaten') {
            logo.src = 'assets/klaten.jpeg'; 
        } else if (city === 'Magelang') {
            logo.src = 'assets/magelang.jpeg';
        } else if (city === 'Salatiga') {
            logo.src = 'assets/salatiga.jpeg';
        } else if (city === 'Semarang') {
            logo.src = 'assets/semarang.jpeg';
        } else if (city === 'Solo') {
            logo.src = 'assets/solo.jpeg';
        } else if (city === 'Sragen') {
            logo.src = 'assets/sragen.jpeg';
        }  else if (city === 'Surakarta') {
            logo.src = 'assets/surakarta.jpeg';
        } else if (city === 'Tegal') {
            logo.src = 'assets/tegal.jpeg';
        } 
        // Tampilkan gambar
        logo.style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
        // Sembunyikan gambar ketika kursor tidak lagi di atas daftar kota
        logo.src = 'assets/jateng.jpeg';
        logo.style.display = 'block';
    });
});
