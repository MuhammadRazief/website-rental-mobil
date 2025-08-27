<template>
  <div 
    class="scroll-progress-container" 
    v-if="scrollPercent > 0"
    @click="scrollToTop"
  >
    <svg class="progress-circle" width="60" height="60">
      <circle
        class="progress-bg"
        cx="30"
        cy="30"
        r="28"
        stroke-width="4"
        fill="none"
      />
      <circle
        class="progress-bar"
        cx="30"
        cy="30"
        r="28"
        stroke-width="4"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <span class="arrow">↑</span>
  </div>
</template>

  
  <script>
  export default {
    name: "ScrollProgress",
    data() {
      return {
        scrollPercent: 0,
        radius: 28
      };
    },
    computed: {
      circumference() {
        return 2 * Math.PI * this.radius;
      },
      dashOffset() {
        return this.circumference * (1 - this.scrollPercent / 100);
      }
    },
    mounted() {
      this.updateScroll(); // inisialisasi
      window.addEventListener("scroll", this.updateScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.updateScroll);
    },
    methods: {
      updateScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        this.scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      },
      scrollToTop() {
        const start = window.scrollY;
        const duration = 600; // durasi dalam ms
        let startTime = null;
  
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // easing cubic out
          window.scrollTo(0, start * (1 - ease));
  
          if (timeElapsed < duration) {
            requestAnimationFrame(animate);
          }
        };
  
        requestAnimationFrame(animate);
      }
    }
  };
  </script>
  
  <style scoped>
  .scroll-progress-container {
    position: fixed;
    bottom: 90px; /* di atas WhatsApp */
    right: 20px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 9999;
  }
  
  .progress-circle {
    transform: rotate(-90deg);
  }
  
  .progress-bg {
    stroke: rgba(0, 0, 0, 0.1);
  }
  
  .progress-bar {
    stroke: #4facfe;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.2s linear;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: #4facfe;
    font-weight: bold;
    pointer-events: none;
  }
  </style>
  