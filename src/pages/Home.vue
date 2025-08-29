<template>
  <div class="home">
    <!-- Carousel -->
    <Carousel />
    <!-- Features Section -->
    <FeaturesSection />
    <Features />
        <!-- Daftar Mobil Section -->
        <DaftarMobil />
    <!-- Call to Action Section -->
    <CtaSection />

  </div>
</template>

<script>
import Features from "@/components/about/Features.vue";
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
    Features,
  },
};
</script>

<style scoped>
.home > :nth-child(2), /* FeaturesSection */
.home > :nth-child(3)  /* Features */
{
  margin-bottom: 20px;
}

.home {
  width: 100%;
  padding-top: 100px;
  /* margin-bottom: 560px; */
  padding-bottom: 0; /* hapus padding bawah */
  align-items: center;
  overflow-x: hidden;
}

</style>
