<template>
  <div class="hero-section">
        <div class="container">
            <div class="hero-content">
                
                <!-- Teks (sekarang di atas pada mobile) -->
                <div class="hero-text">
                    <h1>
                        Sewa Mobil <span class="highlight">Mudah</span> <br /> & Harga Terjangkau
                    </h1>
                    <p class="description">
                        Nikmati kemudahan menyewa mobil dengan armada lengkap, harga bersaing, dan layanan profesional untuk perjalanan nyaman Anda.
                    </p>
    
                    <!-- Fitur -->
                    <div class="features">
                        <div class="feature-box">
                            <i class="fas fa-car"></i> Armada Lengkap
                        </div>
                        <div class="feature-box">
                            <i class="fas fa-bolt"></i> Proses Sewa Cepat
                        </div>
                        <div class="feature-box">
                            <i class="fas fa-wallet"></i> Harga Bersahabat
                        </div>
                        <div class="feature-box">
                            <i class="fas fa-headset"></i> Layanan Profesional
                        </div>
                    </div>
    
                    <div class="cta-buttons">
                    <router-link to="/price-list">
                        <button class="cta-btn">Daftar Harga</button>
                    </router-link>
                    <router-link to="/service">
                        <button class="cta2-btn">Layanan Kami</button>
                    </router-link>
                    </div>

                </div>
                
                <!-- Gambar (sekarang di bawah pada mobile) -->
                <div class="hero-image">
                    <img src="https://media.istockphoto.com/id/2190089371/photo/a-couple-looking-inside-a-new-car-at-the-dealership.webp?a=1&b=1&s=612x612&w=0&k=20&c=BHy0DB-swI94YKbUtvI4pL9B1MfT8y-lCC8J_Ts3-7s=" alt="Layanan Kami" />
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
        
        .hero-section {
            background: linear-gradient(135deg, var(--primary-color), var(--text-hover));
            /* margin: 30px auto; */
        }
        
        .hero-content {
            display: flex;
            align-items: center;
            gap: 50px;
            flex-wrap: wrap;
            padding: 60px 0;
        }
        
        /* Gambar */
        .hero-image {
            flex: 1;
            min-width: 280px;
            display: flex;
            justify-content: center;
        }
        
        .hero-image img {
            max-width: 100%;
            width: 100%;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            object-fit: cover;
            height: 100%;
            max-height: 400px;
        }
        
        /* Teks */
        .hero-text {
            flex: 1;
            min-width: 300px;
        }
        
        .hero-text h1 {
            font-size: 42px;
            font-weight: 700;
            color: #f5f5f5;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .hero-text .highlight {
            background: linear-gradient(90deg, #ffffff, #e0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
        }
        
        .description {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
            color: #e0e7ff;
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .feature-box {
            background: rgba(255, 255, 255, 0.9);
            padding: 16px 12px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            font-size: 15px;
            color: #1e293b;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: transform 0.2s ease;
        }
        
        .feature-box:hover {
            transform: translateY(-3px);
        }
        
        .feature-box i {
            color: var(--primary-color);
            font-size: 18px;
            min-width: 24px;
            text-align: center;
        }
        
        /* CTA */
        .cta-buttons {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .cta-btn {
            margin: 10px 0 0 0;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            border: 2px solid #fff;
            border-radius: 30px;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-block;
            text-align: center;
        }
        
        .cta-btn:hover {
            background: #fff;
            color: var(--primary-color);
        }
        .cta2-btn {
            margin: 10px 0 0 0;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
            border-radius: 30px;
            background: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-block;
            text-align: center;
        }
        
        .cta2-btn:hover {
            background: var(--primary-color);
            color: #fff;
        }
        
        /* Responsif */
        @media (max-width: 992px) {
            .hero-text h1 {
                font-size: 36px;
            }
            
            .description {
                font-size: 17px;
            }
            
            .features {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .hero-section {
                /* padding: 40px 16px; */
            }
            
            .hero-content {
                flex-direction: column-reverse; /* Teks di atas, gambar di bawah */
                gap: 30px;
                text-align: center;
            }
            
            .hero-text {
                text-align: left;
                /* padding: 0 10px; */
            }
            
            .hero-text h1 {
                font-size: 32px;
            }
            
            .description {
                font-size: 16px;
                margin-bottom: 25px;
            }
            
            .features {
                /* grid-template-columns: 1fr; */
                gap: 12px;
                margin: 0 auto 25px;
                /* max-width: 320px; */
            }
            
            .feature-box {
                /* padding: 14px 12px; */
                font-size: 14px;
                justify-content: center;
            }

            .btn{
                text-align: left;
            }
            
            .cta-btn {
                width: auto;
                max-width: none;
                text-align: left;
                margin-left: 0;
                display: inline-block;
                /* padding: 14px 28px; */
            }
            
            .hero-image {
                width: 100%;
                min-width: auto;
            }
            
            .hero-image img {
                max-height: 300px;
            }
        }
        
        @media (max-width: 480px) {
            .hero-section {
                /* padding: 30px 12px; */
            }
            
            .hero-text h1 {
                font-size: 28px;
                text-align: left;
            }
            
            .description {
                text-align: left;
                font-size: 15px;
                margin-bottom: 20px;
            }
            
            .features {
                gap: 10px;
                margin-bottom: 20px;
            }
            
            .feature-box {
                padding: 12px 10px;
                font-size: 13px;
            }
            
            .feature-box i {
                font-size: 16px;
            }
            
            .cta-btn {
                /* padding: 12px 24px; */
                width: auto;
                max-width: none;
                text-align: left;
                margin-left: 0;
                font-size: 15px;
            }
        }
  </style>
  