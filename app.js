const app = Vue.createApp({
  data() {
    const kelahiran = new Date('1987-05-08');
	const sekarang = new Date();
	const umurDETIK = Math.floor((sekarang - kelahiran) / 1000);

	// Objek Date dan mengurangkan satu tanggal dari yang lain, hasilnya adalah perbedaan waktu dalam milidetik. Satu detik sama dengan 1000 milidetik. Jadi, ketika kita mengurangkan dua tanggal, kita mendapatkan perbedaan waktu dalam satuan milidetik, dan jika kita ingin mengonversinya menjadi detik, kita perlu membaginya dengan 1000.

    const umurTANGGAL = new Date(0);
	umurTANGGAL.setUTCSeconds(umurDETIK);

    // Tanggal 1 Januari 1970 adalah titik awal dalam sistem waktu UNIX atau Epoch time. Sistem waktu UNIX menggunakan titik ini sebagai referensi awal untuk menghitung waktu dalam satuan detik sejak titik tersebut.
	
	const umurTAHUN = umurTANGGAL.getUTCFullYear() - 1970; 
	const umurBULAN = umurTANGGAL.getUTCMonth();
	const umurHARI = umurTANGGAL.getUTCDate() - 1;
	
	//kita menciptakan objek Date dengan nilai perbedaan waktu tersebut, JavaScript menginterpretasikan tanggal nol (0) sebagai 1 Januari 1970. Ketika kita ingin mendapatkan jumlah hari dari perbedaan waktu tersebut, kita mengurangi satu hari (-1) karena tanggal nol dalam konteks ini mewakili 1 Januari 1970, sedangkan umur sebenarnya dihitung sejak tanggal lahir.

    return {
      nama: 'Eko Santoso',
      tanggal_lahir: '08 Mei 1987',
      umur: `${umurTAHUN} tahun, ${umurBULAN} bulan, & ${umurHARI} hari`,      
      kocok: 1
    };
  },
  mounted() { this.kocok = Math.random(); }
});

app.mount('#tugas');
