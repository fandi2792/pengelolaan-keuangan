function hitungKeuangan() {
    // Ambil nilai dari input pendapatan dan pengeluaran
    let pendapatan = parseFloat(document.getElementById('pendapatan').value);
    let pengeluaran = parseFloat(document.getElementById('pengeluaran').value);

    // Tempat untuk menampilkan saran
    let saran = document.getElementById('saran');

    // Pastikan input valid
    if (isNaN(pendapatan) || isNaN(pengeluaran) || pendapatan <= 0 || pengeluaran < 0) {
        saran.innerHTML = "Masukkan nilai pendapatan dan pengeluaran yang valid.";
        saran.style.color = "red";
        return;
    }

    // Hitung surplus atau defisit
    let saldo = pendapatan - pengeluaran;

    // Berikan saran berdasarkan hasil perhitungan
    if (saldo > 0) {
        saran.innerHTML = `Keuangan Anda sehat. Anda memiliki surplus Rp ${saldo.toFixed(2)}. Pertimbangkan untuk menabung atau berinvestasi.`;
        saran.style.color = "green";
    } else if (saldo === 0) {
        saran.innerHTML = "Pendapatan Anda sama dengan pengeluaran. Pertahankan dan hati-hati dalam pengelolaan keuangan.";
        saran.style.color = "orange";
    } else {
        saran.innerHTML = `Keuangan Anda defisit sebesar Rp ${Math.abs(saldo).toFixed(2)}. Kurangi pengeluaran atau cari tambahan pendapatan.`;
        saran.style.color = "red";
    }
}
