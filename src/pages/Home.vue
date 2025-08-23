<template>
  <div class="home">
    <!-- Carousel -->
    <Carousel />
    <!-- Features Section -->
    <FeaturesSection />
    <!-- About Section -->
    <AboutSection />

  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import FeaturesSection from "@/components/Features.vue";
import AboutSection from "@/components/About.vue";

export default {
  name: "HomePage",
  components: {
    Carousel,
    FeaturesSection,
    AboutSection,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  align-items: center;
  overflow-x: hidden;
}

</style>
