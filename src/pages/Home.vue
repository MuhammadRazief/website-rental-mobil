<template>
  <div class="home">
    <!-- Carousel -->
    <Carousel />
    <!-- Features Section -->
    <FeaturesSection />
    <Home />
        <!-- Daftar Mobil Section -->
        <DaftarMobil />
    <!-- Call to Action Section -->
    <CtaSection />

  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Carousel from "@/components/Carousel.vue";
import FeaturesSection from "@/components/Features.vue";
import CtaSection from "@/components/Cta.vue";
import DaftarMobil from "@/components/DaftarMobil.vue";

export default {
  name: "HomePage",
  components: {
    Carousel,
    FeaturesSection,
    CtaSection,
    DaftarMobil,
    Home,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 0; /* hapus padding bawah */
  align-items: center;
  overflow-x: hidden;
}

</style>
