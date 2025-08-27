<template>
  <div class="container">
  <section class="features">
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-circle">
            <i class="fa-solid fa-truck"></i>
          </div>
          <p>Armada Lengkap</p>
        </div>
        <div class="feature-card">
          <div class="icon-circle">
            <i class="fa-solid fa-tags"></i>
          </div>
          <p>Harga Terjangkau</p>
        </div>
        <div class="feature-card">
          <div class="icon-circle">
            <i class="fa-solid fa-headset"></i>
          </div>
          <p>Layanan Cepat</p>
        </div>
        <div class="feature-card">
          <div class="icon-circle">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
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
  margin-top: 50px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  
  width: 100%;
}

.features-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 8px;
}

.feature-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1 1 0;
  max-width: 250px;
  padding: 12px 10px;
  border-radius: 12px;
}

.icon-circle {
  background: var(--primary-color); /* default: putih */
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.icon-circle i {
  font-size: 35px;
  color: var(--text-white);
}

.feature-card p {
  font-size: 16px;
  
  font-weight: bold;
  color: var(--text-color);
  margin: 0;
}

/* Tablet besar (iPad Mini, dsb) */
@media (max-width: 992px) {
  .icon-circle {
    width: 55px;
    height: 55px;
  }
  .icon-circle i {
    font-size: 24px;
  }
  .feature-card p {
    font-size: 14px;
  }
}

/* Tablet kecil / mobile besar */
@media (max-width: 767px) {   /* ← ganti dari 768 ke 767 */
  .features-grid {
    gap: 0;
  }

  .icon-circle {
    width: 40px;
    height: 40px;
  }

  .icon-circle i {
    font-size: 18px;
  }

  .feature-card p {
    font-size: 11px;
  }
}

@media (max-width: 480px) {

  .features {
    background-color: #fff !important;
    box-shadow: none !important; 
    margin-top: 20px;
    /* padding: 5px; */
  }
  .feature-card {
    flex: 1 1 auto;
    max-width: 100px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 6px;
  }

  .icon-circle {
    width: 45px;
    height: 45px;
    /* background: #0D5EA6; */
  }

  .icon-circle i {
    font-size: 20px;
  }

  .feature-card p {
    font-size: 13px;
    color: #0D5EA6;
  }
}

@media (max-width: 320px) {  /* iPhone 5 */
  .feature-card {
    flex: 1 1 auto;       /* card fleksibel tapi tetap 1 baris */
    max-width: 60px;      /* kecil agar semua muat */
    flex-direction: column;
    align-items: center;
    padding: 4px;
    text-align: center;
  }

  .icon-circle {
    width: 45px;
    height: 45px;
  }

  .icon-circle i {
    font-size: 20px;
  }

  .feature-card p {
    font-size: 13px;
    color: #0D5EA6;
  }
}


</style>
