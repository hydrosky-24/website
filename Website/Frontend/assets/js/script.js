// Toggle sidebar (sidebar responsif)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active'); // Menambah/menghapus kelas active pada sidebar
}

// Fungsi logout
function logout() {
    localStorage.setItem('isLoggedIn', 'false'); // Hapus status login
    window.location.href = 'login.html'; // Kembali ke halaman login
}

// Menyembunyikan sidebar saat pertama kali
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html'; // Arahkan ke login jika tidak login
}

// Fungsi untuk memuat data pengukuran dari server
function loadData() {
    fetch('/data')  // Gantilah '/data' dengan endpoint yang benar untuk mengambil data dari server
        .then(response => response.json())  // Mengonversi respon menjadi format JSON
        .then(data => {
            // Menampilkan data pada elemen-elemen yang sesuai di halaman
            document.getElementById('suhu').innerText = `${data.suhu}°C`;
            document.getElementById('kelembaban').innerText = `${data.kelembaban}%`;
            document.getElementById('kekeruhan').value = data.kekeruhan;
            document.getElementById('tds').value = data.tds;
            document.getElementById('ph').innerText = data.ph;
        })
        .catch(error => console.error('Error loading data:', error));  // Menangani error jika terjadi
}

// Panggil fungsi loadData saat halaman dimuat
window.onload = loadData;

// Update data setiap 5 detik
setInterval(loadData, 5000);

