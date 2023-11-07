function perbaruiJam() {
    const sekarang = new Date();
    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    const detik = sekarang.getSeconds().toString().padStart(2, '0');

    document.getElementById('jam').textContent = jam;
    document.getElementById('menit').textContent = menit;
    document.getElementById('detik').textContent = detik;
}

setInterval(perbaruiJam, 1000); // Memperbarui jam setiap detik
perbaruiJam(); // Memperbarui jam pada saat halaman pertama kali dimuat

