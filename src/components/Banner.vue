<template>
  <div class="container">
    <section class="banner-section">
      <h1 class="banner-title">Contact Us</h1>
      <p class="banner-subtitle">Hubungi kami untuk informasi lebih lanjut</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BannerPage',
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}

.banner-section {
  width: 100%;
  height: 200px;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center; /* teks di tengah vertikal */
  align-items: center; /* teks di tengah horizontal */
  color: white;
  text-align: center;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.banner-subtitle {
  font-size: 1rem;
  opacity: 0.9;
}
</style>
