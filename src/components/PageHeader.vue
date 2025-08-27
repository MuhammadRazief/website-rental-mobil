<template>
    <div class="page-header" :style="{ backgroundImage: `url(${bgImage})` }">
      <div class="overlay"></div>
      <div class="particles" ref="particlesContainer"></div>
      <div class="content">
        <p class="subtitle">
          <span class="icon"><i :class="iconClass"></i></span>
          {{ subtitle }}
        </p>
        <h1 class="title">{{ title }}</h1>
        <div class="divider" v-if="showDivider"></div>
        <p class="description" v-if="description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PageHeader",
    props: {
      bgImage: {
        type: String,
        default: "https://images.unsplash.com/photo-1621998346149-3e4f82cddfdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja2dyb3VuZCUyMHdoaXRlJTIwY2FyfGVufDB8fDB8fHww"
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      iconClass: {
        type: String,
        default: "fas fa-star"
      },
      showDivider: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      this.initParticles();
      this.initParallax();
    },
    beforeUnmount() {
      // Lepas event listener paralaks
      const header = this.$el;
      header.removeEventListener('mousemove', this.handleParallax);
    },
    methods: {
      initParticles() {
        const particlesContainer = this.$refs.particlesContainer;
        const particleCount = 30;
  
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
  
          const size = Math.random() * 5 + 2;
          const posX = Math.random() * 100;
          const delay = Math.random() * 15;
  
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.bottom = `-${size}px`;
          particle.style.animationDelay = `${delay}s`;
  
          particlesContainer.appendChild(particle);
        }
      },
      initParallax() {
        const header = this.$el;
        this.handleParallax = (e) => {
          const x = (window.innerWidth - e.pageX * 2) / 50;
          const y = (window.innerHeight - e.pageY * 2) / 50;
          header.style.backgroundPosition = `${x}px ${y}px`;
        };
        header.addEventListener('mousemove', this.handleParallax);
      }
    }
  };
  </script>
  <style scoped>

        .page-header {
            position: relative;
            width: 100%;
            min-height: 100vh;
            margin-top: 20px;
            display: flex;
            align-items: center;
            text-align: left;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 80px 5%;
            box-sizing: border-box;
            color: white;
            overflow: hidden;
        }

        .overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: linear-gradient(135deg, rgba(0, 40, 80, 0.85) 0%, rgba(0, 20, 40, 0.9) 100%);
            z-index: 1;
        }

        .content {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            padding: 40px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transform: translateY(0);
            transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .content:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        /* Subtitle dengan icon */
        .subtitle {
            font-size: 1.1rem;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 3px;
            display: flex;
            align-items: center;
            font-weight: 500;
            color: #4facfe;
            text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
        }

        .subtitle .icon {
            margin-right: 12px;
            color: #4facfe;
            font-size: 1.2rem;
        }

        /* Title gradien */
        .title {
            font-size: 3.8rem;
            font-weight: 800;
            line-height: 1.2;
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #a6c1ee 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0 0 20px 0;
            padding: 0;
            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Garis dekoratif horizontal */
        .divider {
            width: 80px;
            height: 5px;
            background: linear-gradient(90deg, #4facfe, #00f2fe);
            margin: 25px 0;
            border-radius: 5px;
            transition: width 0.5s ease;
        }

        .content:hover .divider {
            width: 120px;
        }

        /* Animasi fade-in */
        .page-header, .subtitle, .title, .divider {
            animation: fadeInUp 1s ease-out forwards;
        }

        .subtitle {
            animation-delay: 0.2s;
            opacity: 0;
        }

        .title {
            animation-delay: 0.4s;
            opacity: 0;
        }

        .divider {
            animation-delay: 0.6s;
            opacity: 0;
        }

        @keyframes fadeInUp {
            from { 
                opacity: 0; 
                transform: translateY(40px); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0); 
            }
        }

        /* Efek partikel */
        .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            opacity: 0;
            animation: float 15s infinite linear;
        }

        @keyframes float {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px) rotate(360deg);
                opacity: 0;
            }
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .title { font-size: 3.2rem; }
        }

        @media (max-width: 992px) {
            .title { font-size: 2.8rem; }
            .content { padding: 30px; }
        }

        @media (max-width: 768px) {
            .page-header { 
                padding: 60px 20px; 
                min-height: 80vh;
                background-attachment: scroll;
            }
            .subtitle { 
                font-size: 0.9rem; 
                letter-spacing: 2px;
            }
            .title { 
                font-size: 2.4rem; 
                margin-bottom: 15px;
            }
            .divider { 
                width: 60px; 
                height: 4px; 
                margin: 20px 0;
            }
            .content:hover .divider {
                width: 80px;
            }
            .content {
                padding: 25px;
            }
        }

        @media (max-width: 576px) {
            .title { font-size: 2rem; }
            .subtitle { font-size: 0.8rem; }
            .divider { 
                width: 50px; 
                height: 3px;
            }
            .content:hover .divider {
                width: 60px;
            }
        }

        @media (max-width: 400px) {
            .title { font-size: 1.8rem; }
            .content { padding: 20px 15px; }
        }
  </style>
  