<template>
    <div class="container">
    <section class="features">
        <div class="features-grid">
          <div class="feature-card">
            <img src="@/assets/Armada.png" alt="Armada Lengkap" />
            <p>Armada Lengkap</p>
          </div>
          <div class="feature-card">
            <img src="@/assets/Harga.png" alt="Harga Terjangkau" />
            <p>Harga Terjangkau</p>
          </div>
          <div class="feature-card">
            <img src="@/assets/Service.png" alt="Layanan Cepat" />
            <p>Layanan Cepat</p>
          </div>
          <div class="feature-card">
            <img src="@/assets/Jangkauan.png" alt="Jangkauan Luas" />
            <p>Jangkauan Luas</p>
          </div>
        </div>
    </section>
</div>
  </template>
  
  <script>
  export default {
    name: "FeaturesSection",
  };
  </script>
  
  <style scoped>
.features {
  /* margin: 20px; */
  margin-top: 50px;
  width: 100%; /* pastikan full layar */
  background-color: #ffffff; /* merah */
  padding: 20px 0;
  box-shadow: 0 8px 12px rgba(0,0,0,0.1);
  border-radius: 12px;
}
  
  /* Grid fitur - tetap satu baris */
  .features-grid {
  display: flex;
  justify-content: space-between; /* card tersebar rapi */
  flex-wrap: nowrap; /* tetap 1 baris */
  gap: 16px;
}
  
.feature-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1 1 0; /* fleksibel, otomatis mengecil */
  max-width: 250px; /* tetap batasi maksimal */
  padding: 12px 10px;
  border-radius: 12px;
}
  
  .feature-card img {
    width: 50px;
    height: 50px;
  }
  
  .feature-card p {
    font-size: 14px;
    font-weight: 500;
    color: #0D5EA6;
    margin: 0;
  }
  
  @media (max-width: 768px) {
  .features-grid {
    justify-content: space-around; /* lebih dekat antar card */
    gap: 0; /* gap antar card lebih kecil */
  }

  .feature-card {
    flex: 1 1 auto; /* card menyesuaikan lebar layar */
    max-width: 80px; /* opsional, lebih kecil agar semua muat */
    padding: 8px 4px; /* jarak kiri-kanan card lebih kecil */
    flex-direction: column;
    text-align: center;
    gap: 2px; /* jarak icon ke teks */
  }

  .feature-card img {
    width: 35px;
    height: 35px;
    margin-bottom: 2px;
  }

  .feature-card p {
    font-size: 11px;
  }
}


@media (max-width: 480px) {
  .feature-card {
    padding: 8px 10px; /* jarak kiri-kanan sedikit lebih kecil */
  }
  .feature-card img {
    width: 50px;
    height: 40px;
  }
  .feature-card p {
    font-size: 13px;
  }
}

  </style>
  