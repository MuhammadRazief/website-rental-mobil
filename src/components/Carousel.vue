<template>
    <div class="container">
      <section class="banner-section">
        <div class="carousel-container card">
            <transition :name="transitionEffect" mode="out-in">
            <img
                v-if="loadedImages.includes(banners[currentIndex])"
                :src="banners[currentIndex]"
                :key="currentIndex"
                class="carousel-image slide"
            />
            </transition>


        </div>
  
        <!-- Dots -->
        <div class="dots">
          <span
            v-for="(banner, index) in banners"
            :key="index"
            class="dot"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
    name: 'BannerPage',
    setup() {
      const banners = [
        require('@/assets/Banner-01.png'),
        require('@/assets/Banner-02.png'),
      ]
  
      const currentIndex = ref(0)
      const lastIndex = ref(0)
      const transitionEffect = ref('slide-left')
      const loadedImages = ref([])
  
      // Preload semua gambar
      onMounted(() => {
        banners.forEach(src => {
          const img = new Image()
          img.src = src
          img.onload = () => {
            if (!loadedImages.value.includes(src)) loadedImages.value.push(src)
          }
        })
      })
  
      const nextSlide = () => {
        lastIndex.value = currentIndex.value
        transitionEffect.value = 'slide-left'
        currentIndex.value = (currentIndex.value + 1) % banners.length
      }
  
      const prevSlide = () => {
        lastIndex.value = currentIndex.value
        transitionEffect.value = 'slide-right'
        currentIndex.value = (currentIndex.value - 1 + banners.length) % banners.length
      }
  
      const goToSlide = (index) => {
        lastIndex.value = currentIndex.value
        transitionEffect.value = index > currentIndex.value ? 'slide-left' : 'slide-right'
        currentIndex.value = index
      }
  
      return {
        banners,
        currentIndex,
        lastIndex,
        transitionEffect,
        loadedImages,
        nextSlide,
        prevSlide,
        goToSlide
      }
    }
  }
  </script>
  
  
  <style scoped>
  
  /* Banner card */
  .banner-section {
    width: 100%;
    text-align: center;
  }
  
  /* Card style */
  .card {
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    margin: 0 auto;
    max-height: 400px;
  }
  
  /* Carousel container */
  .carousel-container {
    width: 100%;
    max-height: 400px;
    min-height: 200px;
    overflow: hidden;
    position: relative;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.6s ease, opacity 0.6s ease;

  }
  /* Slide kiri */
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide kanan */
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
  
  /* Dots di luar banner */
  .dots {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  
  .dot {
    height: 12px;
    width: 12px;
    margin: 0 4px;
    border-radius: 50%;
    background-color: rgba(165, 155, 155, 0.7);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  
  .dot.active {
    background-color: var(--primary-color, #4facfe);
    transform: scale(1.2);
  }
  
  /* Mobile / Tablet */
  @media (max-width: 992px) {
    .carousel-container {
      max-height: 300px;
      aspect-ratio: 16/6;
    }
  }
  
  @media (max-width: 768px) {
    .carousel-container {
        max-height: 250px;
        aspect-ratio: 16/6;
    }
    .dot { height: 10px; width: 10px; margin: 0 3px; }
  }
  
  @media (max-width: 576px) {
    .carousel-container {
        max-height: 200px;
        aspect-ratio: 16/6;
    }
    .dot { height: 8px; width: 8px; margin: 0 2px; }
  }
  </style>
  