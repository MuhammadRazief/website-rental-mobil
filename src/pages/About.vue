<template>
  <div class="about-section">
    <PageHeader
      title="Tentang Kami"
      subTitle="Home / Tentang Kami"
    />

    <About />
    <Features />
  </div>
</template>

<script>
import About from '@/components/about/About.vue';
import PageHeader from '@/components/PageHeader.vue';
import Features from '@/components/about/Features.vue';

export default {
  name: 'AboutSection',
  components: {
    About,
    PageHeader,
    Features
  }
}
</script>

<style scoped>

.about-section {
  /* padding: 35px 0; */
}
</style>
