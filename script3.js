const logo = document.querySelector('.logo img');
const kotajateng = document.querySelectorAll('.kotajateng li');

kotajateng.forEach(item => {
    item.addEventListener('mouseover', function() {
        const city = this.getAttribute('data-city');
        // Ganti src gambar sesuai dengan kota yang di-hover
        if (city === 'Bandung') {
            logo.src = 'assets/bandung.jpeg';
        } else if (city === 'Bekasi') {
            logo.src = 'assets/bekasi.jpg';
        } else if (city === 'Bogor') {
            logo.src = 'assets/bogor.jpg'; 
        } else if (city === 'Cirebon') {
            logo.src = 'assets/cirebon.jpg';
        } else if (city === 'Depok') {
            logo.src = 'assets/depok.jpg';
        } else if (city === 'Indramayu') {
            logo.src = 'assets/indramayu.jpg';
        } else if (city === 'Pangandaran') {
            logo.src = 'assets/pangandaran.jpg';
        } else if (city === 'Purwakarta') {
            logo.src = 'assets/purwakarta.jpg';
        }  else if (city === 'Sukabumi') {
            logo.src = 'assets/sukabumi.jpg';
        } else if (city === 'Tasikmalaya') {
            logo.src = 'assets/tasikmalaya.jpg';
        } 
        // Tampilkan gambar
        logo.style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
        // Sembunyikan gambar ketika kursor tidak lagi di atas daftar kota
        logo.src = 'jabar.jpeg';
        logo.style.display = 'block';
    });
});
