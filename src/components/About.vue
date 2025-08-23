<template>
    <div class="container">
    <section class="about">
          <div class="about-content">
          <!-- Gambar / ilustrasi -->
  
          <!-- Teks -->
          <div class="about-text">
            <h2>Tentang Kami</h2>
            <p>
              Kami adalah penyedia jasa rental mobil terpercaya di Jakarta dengan armada lengkap, harga terjangkau, 
              dan layanan pelanggan 24 jam. 
            </p>
            <p>
              Dengan pengalaman bertahun-tahun, kami berkomitmen memberikan kenyamanan, keamanan, dan kemudahan 
              dalam setiap perjalanan Anda.
            </p>
  
            <!-- Keunggulan -->
            <ul class="about-list">
              <li>✅ Armada lengkap & terawat</li>
              <li>✅ Supir berpengalaman</li>
              <li>✅ Harga bersahabat</li>
              <li>✅ Layanan 24/7</li>
            </ul>
          </div>
          <div class="about-image">
            <img src="@/assets/Logo-Rental.png" alt="Tentang Kami">
          </div>
        </div>
    </section>
</div>
  </template>

    <script>
    export default {
      name: "AboutSection",
    };
    </script>
  
  <style scoped>
   .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .about {
    width: 100%;
    /* text-align: center; */
  }
  
  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
  }
  
  .about-image img {
    max-width: 400px;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .about-text {
    flex: 1;
    min-width: 280px;
  }
  
  .about-text h2 {
    font-size: 28px;
    margin-bottom: 16px;
    color: #0D5EA6;
  }
  
  .about-text p {
    margin-bottom: 12px;
    line-height: 1.6;
    color: #444;
  }
  
  .about-list {
    list-style: none;
    padding: 0;
  }
  
  .about-list li {
    margin-bottom: 8px;
    font-size: 16px;
  }
  </style>
  