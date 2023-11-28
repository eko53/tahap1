const app = Vue.createApp({
  data() {
    return {
      nama: 'Eko Santoso', 
      umurDETIK: 0, 
      umur: { tahun: 0, bulan: 0, hari: 0 },
      sekarang: new Date(),
      tglLahir: '', 
      detik: 60 * 60 * 24 * 365.25
    };
  },
  methods: {
    tampilkanTanggal(event) {
      this.tglLahir = event.target.value;
    },
    cekUmur() {
      const kelahiran = new Date(this.tglLahir);
      this.sekarang = new Date();
      
      const diffTime = Math.abs(this.sekarang - kelahiran);
      this.umurDETIK = Math.floor(diffTime / 1000);

      this.umur.tahun = Math.floor(this.umurDETIK / this.detik);
      const sisaDetik = this.umurDETIK % this.detik;
      this.umur.bulan = Math.floor(sisaDetik / (this.detik / 12));
      const sisaDetikBulan = sisaDetik % (this.detik / 12);
      this.umur.hari = Math.floor(sisaDetikBulan / (60 * 60 * 24));
    }
  },
  computed: {
    tombol() {
      return this.tglLahir !== '';
    }
  }
});

app.mount('#tugas');
