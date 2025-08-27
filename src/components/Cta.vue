<template>
    <div class="cta-container">
      <section class="cta-section">
        <h2 class="cta-title">Siap Menyewa Mobil?</h2>
        <p class="cta-subtitle">Hubungi kami sekarang dan dapatkan penawaran terbaik untuk perjalanan Anda!</p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          class="cta-button"
        >
          <i class="fab fa-whatsapp"></i>
          Hubungi Kami
        </a>
      </section>
  
      <!-- Decorative elements -->
      <div class="cta-decoration">
        <div class="decoration-item triangle-1"></div>
        <div class="decoration-item triangle-2"></div>
        <div class="decoration-item square"></div>
        <div class="decoration-item zigzag"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CtaSection",
    mounted() {
      const ctaSection = this.$el.querySelector('.cta-section');
  
      // Observer untuk animasi scroll
      const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
  
      // Inisialisasi state awal
      ctaSection.style.opacity = 0;
      ctaSection.style.transform = 'translateY(20px)';
      ctaSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  
      observer.observe(ctaSection);
    }
  };
  </script>
  
  <style scoped>
  
  .cta-container {
    width: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: 70px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
        
        .cta-section {
            text-align: center;
            color: white;
            position: relative;
            z-index: 2;
        }
        
        .cta-title {
            font-size: 3rem;
            margin-bottom: 15px;
            font-weight: 700;
            line-height: 1.2;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .cta-subtitle {
            font-size: 1.3rem;
            margin-bottom: 35px;
            font-weight: 400;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
            opacity: 0.9;
        }
        
        .cta-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #25D366;
            color: white;
            border: none;
            padding: 18px 40px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 500;
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        
        .cta-button:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #128C7E;
            border-radius: 50px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.4s ease;
            z-index: -1;
        }
        
        .cta-button:hover:before {
            transform: scaleX(1);
            transform-origin: left;
        }
        
        .cta-button:hover {
            box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
            transform: translateY(-3px);
        }
        
        .cta-button i {
            font-size: 1.5rem;
            transition: transform 0.3s ease;
        }
        
        .cta-button:hover i {
            transform: scale(1.2);
        }
        
        /* Decorative elements */
        .cta-decoration {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        
        .decoration-item {
            position: absolute;
            opacity: 0.1;
        }
        
        .triangle-1 {
            width: 0;
            height: 0;
            border-left: 80px solid transparent;
            border-right: 80px solid transparent;
            border-bottom: 140px solid #ffffff;
            top: -70px;
            left: 10%;
            animation: float 12s ease-in-out infinite;
        }
        
        .triangle-2 {
            width: 0;
            height: 0;
            border-left: 60px solid transparent;
            border-right: 60px solid transparent;
            border-top: 100px solid #ffffff;
            bottom: -50px;
            right: 15%;
            animation: float 10s ease-in-out infinite;
            animation-delay: 1s;
        }
        
        .square {
            width: 100px;
            height: 100px;
            background: #ffffff;
            bottom: 20%;
            left: 5%;
            transform: rotate(15deg);
            animation: pulse 8s ease-in-out infinite;
        }
        
        .zigzag {
            position: absolute;
            top: 30%;
            right: 8%;
            width: 80px;
            height: 40px;
            background: linear-gradient(
                -45deg, 
                transparent 0%, 
                transparent 42%, 
                #ffffff 43%, 
                #ffffff 57%,
                transparent 58%, 
                transparent 100%
            );
            background-size: 20px 20px;
            opacity: 0.15;
            animation: move 15s linear infinite;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 0.1;
                transform: rotate(15deg) scale(1);
            }
            50% {
                opacity: 0.15;
                transform: rotate(15deg) scale(1.1);
            }
        }
        
        @keyframes move {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: 100px 100px;
            }
        }
        
        /* Responsive design */
        @media (max-width: 992px) {
            .cta-title {
                font-size: 2.5rem;
            }
            
            .cta-subtitle {
                font-size: 1.2rem;
            }
            
            .triangle-1, .triangle-2 {
                transform: scale(0.8);
            }
        }
        
        @media (max-width: 768px) {
            .cta-container {
                padding: 50px 15px;
                border-radius: 15px;
            }
            
            .cta-title {
                font-size: 2.2rem;
            }
            
            .cta-subtitle {
                font-size: 1.1rem;
                margin-bottom: 30px;
            }
            
            .cta-button {
                padding: 16px 32px;
                font-size: 1rem;
            }
            
            .zigzag {
                width: 60px;
                height: 30px;
                right: 5%;
            }
        }
        
        @media (max-width: 576px) {
            .cta-title {
                font-size: 1.8rem;
            }
            
            .cta-subtitle {
                font-size: 1rem;
            }
            
            .cta-button {
                width: 100%;
                max-width: 280px;
            }
            
            .zigzag {
                display: none;
            }
        }
        
        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
            .cta-button,
            .decoration-item,
            .zigzag {
                transition: none;
                animation: none;
            }
        }
  </style>