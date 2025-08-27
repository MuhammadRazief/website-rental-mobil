<template>
 <section class="home-section">
        <!-- Background decorative elements -->
        <div class="bg-circle circle-1"></div>
        <div class="bg-circle circle-2"></div>
        
        <div class="container">
            <!-- Judul Kecil -->
            <p class="welcome-text">Tentang Kami</p>
            
            <!-- Judul Utama -->
            <h1 class="main-title">
                RENTAL <span class="highlight">MOBIL</span> JAKARTA
            </h1>
            <!-- Konten bawah: image kiri, teks kanan -->
            <div class="bottom-content">
                <div class="image-container">
                    <img src="@/assets/Logo-Rental.png" alt="Rental Mobil Jakarta" />
                </div>
                <div class="text-container">
                    <p class="description">
                        Layanan Rental Mobil <span class="highlight-text">Terbaik</span> dan <span class="highlight-text">Terpercaya</span> di Jakarta
                    </p>
                    <p class="description" style="font-size: 18px; margin-top: 20px;">
                        Kami menyediakan berbagai jenis mobil untuk kebutuhan perjalanan Anda. Dengan armada terbaru dan kondisi prima, perjalanan Anda akan menjadi lebih nyaman dan aman.
                    </p>
                    <button class="cta-btn">
                        <i class="fas fa-phone-alt"></i> Hubungi Kami
                    </button>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HomeSection",
  };
  </script>
  
  <style scoped>
        
        .home-section {
            width: 100%;
            margin-top: 20px;
            min-height: 100vh;
            padding: 100px 20px 80px;
            background: linear-gradient(135deg, #f9f9f9 0%, #e6eef9 100%);
            position: relative;
            overflow: hidden;
        }
        
        /* Background decorative elements */
        .bg-circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(26, 43, 255, 0.05);
        }
        
        .circle-1 {
            width: 300px;
            height: 300px;
            top: -100px;
            right: -100px;
        }
        
        .circle-2 {
            width: 200px;
            height: 200px;
            bottom: 50px;
            left: -50px;
        }
        
        /* Welcome text */
        .welcome-text {
            font-size: 16px;
            color: var(--primary-color);
            font-weight: 500;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .welcome-text::after {
            content: "";
            display: inline-block;
            width: 40px;
            height: 2px;
            background: var(--primary-color);
            margin-left: 10px;
        }
        
        /* Main title */
        .main-title {
            font-size: 64px;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 30px;
            max-width: 700px;
        }
        
        .main-title .highlight {
            color: var(--primary-color);
            position: relative;
            display: inline-block;
        }
        
        .main-title .highlight::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 10px;
            background: var(--primary-color);
            z-index: -1;
        }
        
        /* Bottom content */
        .bottom-content {
            display: flex;
            gap: 40px;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 40px;
        }
        
        .image-container {
            flex: 1 1 50%;
            position: relative;
        }
        
        .image-container img {
            width: 100%;
            border-radius: 15px;
            object-fit: cover;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease;
        }
        
        .image-container:hover img {
            transform: translateY(-5px);
        }
        
        .image-container::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid var(--primary-color);
            border-radius: 15px;
            top: 15px;
            left: 15px;
            z-index: -1;
        }
        
        .text-container {
            flex: 1 1 45%;
        }
        
        .description {
            font-size: 22px;
            margin-bottom: 25px;
            color: #333;
            line-height: 1.5;
        }
        
        .highlight-text {
            color: var(--primary-color);
            font-weight: 600;
            position: relative;
            display: inline-block;
        }
        
        .highlight-text::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--primary-color);
        }
        
        .cta-btn {
            padding: 16px 32px;
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            background-color: var(--primary-color);
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 15px rgba(26, 43, 255, 0.3);
        }
        
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
            .main-title { 
                font-size: 48px; 
            }
            
            .bottom-content { 
                gap: 30px; 
            }
            
        }
        
        @media (max-width: 768px) {
            .home-section {
                padding: 80px 20px 60px;
            }
            
            .main-title { 
                font-size: 36px; 
            }
            
            .bottom-content { 
                flex-direction: column; 
            }
            
            .text-container { 
                margin-top: 20px; 
            }
            
            .description {
                font-size: 18px;
            }
            
            .image-container::before {
                display: none;
            }
        }
        
        @media (max-width: 480px) {
            .main-title { 
                font-size: 32px; 
            }
            
            .description { 
                font-size: 16px; 
            }
            
            .cta-btn { 
                width: 100%; 
                text-align: center;
                justify-content: center;
            }
            
            .stat-item {
                flex: 1 1 100%;
            }
        }
  </style>
  