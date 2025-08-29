<template>
  <div class="container">
    <div class="about-container">

      <!-- Title + Logo -->
      <div class="title">
        <h1>Rental Mobil Jakarta</h1>
        <div class="logo">
          <div class="logo-card"><li class="fas fa-car"></li></div>
          <div class="logo-card"><li class="fas fa-car"></li></div>
          <div class="logo-card"><li class="fas fa-car"></li></div>
        </div>
      </div>

      <div class="border"></div>

      <!-- Content + Sticky Image di kanan -->
      <div class="about-content">
        <div class="content">
          <p>
            Selamat datang di Rental Mobil Jakarta, penyedia layanan rental mobil terpercaya di Jakarta. Kami berkomitmen untuk memberikan layanan terbaik dengan armada mobil yang terawat dan berkualitas tinggi. 
          </p>
          <p>
            Dengan pengalaman bertahun-tahun di industri ini, kami memahami kebutuhan pelanggan kami dan selalu berusaha untuk memberikan solusi transportasi yang nyaman, aman, dan efisien. 
          </p>
          <p>
            Tim kami terdiri dari profesional yang ramah dan berpengalaman, siap membantu Anda dalam memilih kendaraan yang sesuai dengan kebutuhan perjalanan Anda. Kami juga menawarkan berbagai paket rental yang fleksibel, mulai dari rental harian hingga jangka panjang.
          </p>
          <p>
            Di Rental Mobil Jakarta, kepuasan pelanggan adalah prioritas utama kami. Kami berusaha untuk memberikan pengalaman rental mobil yang menyenangkan dan bebas dari masalah. Terima kasih telah mempercayakan kebutuhan transportasi Anda kepada kami.
          </p>
        </div>

        <div class="side-image">
          <img src="@/assets/Logo-Rental.png" alt="About Us" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
}
</script>

<style scoped>
.about-container {
  margin: 30px auto;
  /* padding: 0 15px; */
  /* max-width: 1000px; */
}

/* Title + Logo */
.title {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.title h1 {
  color: var(--primary-color);
  font-size: 28px;
}

.logo {
  display: flex;
  gap: 10px;
}

.logo-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-card li {
  list-style: none;
  color: var(--primary-color);
  font-size: 20px;
}

.border {
  border: 1px solid var(--text-light);
  margin: 20px 0;
}

/* Content + Side Image */
.about-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap; /* agar responsive */
}

.content {
  flex: 1; /* lebih banyak ruang untuk teks */
  min-width: 280px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-color);
}


.content p {
 max-width: 500px;
}

.side-image {
  flex: 1;
  max-width: 500px; /* diperbesar dari 400px */
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

.side-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}


/* Responsiveness */
@media (max-width: 992px) {
  .title h1 {
    font-size: 24px;
  }
  .content {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
  .side-image {
    position: relative;
    top: auto;
    max-width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .title {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
