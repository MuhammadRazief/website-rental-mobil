<template>
  <section class="about">
    <div class="container">
      <div class="about-container">
        <!-- Gambar About -->
        <div class="about-image">
          <img src="@/assets/Logo-Rental.png" alt="Tentang Kami" />
        </div>

        <!-- Teks About -->
        <div class="about-text">
          <h2>Tentang Kami</h2>
          <h3>
            Layanan Transportasi 
            <span class="color-aman">Aman</span>, 
            <span class="color-nyaman">Nyaman</span>, dan 
            <span class="color-profesional">Profesional</span>
          </h3>

          <p>
            Kami adalah perusahaan yang bergerak di bidang layanan transportasi
            dengan komitmen untuk memberikan pelayanan terbaik, aman, dan nyaman
            bagi pelanggan. Dengan armada yang lengkap dan tim profesional, kami
            selalu siap memenuhi kebutuhan Anda.
          </p>
          <p>
            Visi kami adalah menjadi pilihan utama masyarakat dalam layanan
            transportasi dengan menghadirkan inovasi, kepercayaan, dan
            kepuasan pelanggan.
          </p>

          <!-- Section biru highlight dalam AboutSection -->
          <div class="about-highlight">
            ⭐ Ribuan pelanggan telah mempercayakan perjalanan mereka kepada kami! ⭐
          </div>

          <div class="btn-group">
            <a href="#" class="btn">Pelajari Lebih Lanjut</a>
            <a href="#" class="btn btn-secondary">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about {
  background-color: #fff;
  width: 100%;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1100px;
}

.about-text {
  flex: 1 1 50%;
  color: #333;
  min-width: 280px;
}

.about-text h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.about-text h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.4;
}

/* Subtitle warna-warni */
.color-aman {
  color: #0D5EA6;
  font-weight: bold;
}
.color-nyaman {
  color: #FFD700;
  font-weight: bold;
}
.color-profesional {
  color: #28A745;
  font-weight: bold;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Section biru highlight */
.about-highlight {
  background-color: #0D5EA6;
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Gambar */
.about-image {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-image img:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
}

/* Tombol */
.btn-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 25px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  background-color: white;
  color: #0D5EA6;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.25);
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid #0D5EA6;
  color: #0D5EA6;
}

.btn-secondary:hover {
  background-color: #0D5EA6;
  color: white;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-container { gap: 30px; }
  .about-text h2 { font-size: 2.4rem; }
  .about-text p { font-size: 1rem; }
}

@media (max-width: 868px) {
  .about-container {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  .about-text h2 { font-size: 2rem; }
  .about-text p { font-size: 0.95rem; }
  .about-image img { max-width: 80%; }
  .btn-group { justify-content: center; }
}

@media (max-width: 667px) {
  .about { padding: 50px 15px; }
  .about-text h2 { font-size: 1.8rem; }
  .about-text p { font-size: 0.9rem; line-height: 1.5; }
  .btn { padding: 10px 18px; font-size: 0.85rem; }
}

@media (max-width: 480px) {
  .about-text h2 { font-size: 1.6rem; }
  .about-text p { font-size: 0.85rem; }
  .about-image img { max-width: 90%; }
  .btn-group {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .btn { width: 100%; padding: 10px 0; box-sizing: border-box; text-align: center; }
  .about-highlight { font-size: 1rem; padding: 15px; }
}
</style>
