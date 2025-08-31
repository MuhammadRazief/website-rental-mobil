<template>
  <div class="container">
    <div class="layanan-page">
  
      <!-- Services Section -->
      <section class="services-section">
        <h2>Layanan Unggulan Rental Mobil Jakarta</h2>
        <p class="section-desc">Kami menawarkan berbagai layanan untuk memenuhi kebutuhan transportasi Anda.</p>
        
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  </div>
</template>

<script>
import Cta from "@/components/layanan/Cta.vue"
export default {
  name: "LayananSection",
  components: {
    Cta,
  },
  data() {
    return {
      services: [
        { icon: "fas fa-car", title: "Rental Harian", description: "Sewa mobil harian dengan harga kompetitif." },
        { icon: "fas fa-road", title: "Rental Mingguan", description: "Pilihan rental mingguan untuk perjalanan panjang." },
        { icon: "fas fa-truck-pickup", title: "Armada Lengkap", description: "Beragam jenis mobil sesuai kebutuhan Anda." },
        { icon: "fas fa-briefcase", title: "Bisnis & Corporate", description: "Layanan khusus untuk perusahaan." }
      ]
    };
  }
};
</script>

<style scoped>
/* Base */
.layanan-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
}
/* Services Section */
.services-section {
  /* padding: 80px 20px; */
  margin-top: 50px;
}
.services-section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--primary-color, #4facfe);
  text-align: center;
}
.services-section .section-desc {
  font-size: 1.1rem;
  margin-bottom: 50px;
  color: #555;
  text-align: center;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}
.service-card {
  background: var(--primary-color);
  padding: 35px 25px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
.service-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #fff;
}
.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #fff;
}
.service-card p {
  font-size: 0.95rem;
  color: #fff;
}
/* Responsive */
@media (max-width: 768px) {
  .services-section h2 {
    font-size: 1.8rem;
  }
  .cta-button {
    width: 100%;
    max-width: 250px;
  }
}
</style>
