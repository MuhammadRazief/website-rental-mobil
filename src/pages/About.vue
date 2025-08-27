<template>
  <div class="about-section">
    <PageHeader
  title="Tentang Kami"
  subtitle="Selamat datang di halaman About"
  description="Kami memberikan solusi terbaik untuk bisnis Anda."
/>

    <About />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'AboutSection',
  components: {
    About,
    PageHeader,
  }
}
</script>

<style scoped>

.about-section {
  /* padding: 35px 0; */
}
</style>
