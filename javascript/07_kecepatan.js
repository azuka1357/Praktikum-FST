document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let t = parseFloat(document.getElementById('t').value);
    let h = parseFloat(document.getElementById('h').value);
    let delt_t = parseFloat(document.getElementById('delt_t').value);

    let g = 9.8; // Gravitasi
    let delt_h = 0.05; // Toleransi radius, dikonversi ke m

    // Menghitung kecepatan
    let kecepatan = h/t

    // Menghitung kesalahan ukur kecepatan
    let delta_v = Math.sqrt(Math.pow((1/t), 2) * Math.pow((2/3 * delt_h), 2) + 
    Math.pow((h / Math.pow(t, 2)), 2) * Math.pow(delt_t, 2));


    document.getElementById('result').textContent = `Kecepatan : ${kecepatan.toFixed(3)} cm/s`;
    document.getElementById('errorResult').textContent = `Kesalahan Ukur: ${delta_v.toFixed(3)} cm/s`;
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.classList.toggle('open');
    content.classList.toggle('shifted');
}