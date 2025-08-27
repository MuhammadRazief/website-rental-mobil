<template>
    <footer class="footer">
      <div class="footer-container">
  
        <!-- Brand -->
        <div class="footer-section">
          <h2 class="logo">Rental Mobil Jakarta</h2>
          <p>{{ description }}</p>
        </div>
  
        <!-- Links -->
        <div class="footer-section">
          <h3>Links</h3>
          <ul>
            <li v-for="link in footerLinks" :key="link.key">
            <a :href="link.path">
                <i class="fas fa-chevron-right"></i> {{ link.name }}
            </a>
            </li>

          </ul>
        </div>
  
        <!-- Contact -->
        <div class="footer-section">
          <h3>Alamat</h3>
          <div class="contact-info">
            <p v-for="(item, index) in contactInfo" :key="index">
              <i :class="item.icon"></i> {{ item.text }}
            </p>
          </div>
        </div>
  
        <!-- Social Media -->
        <div class="footer-section">
          <h3>Ikuti Kami</h3>
          <p>{{ socialText }}</p>
          <div class="social-links">
            <a v-for="(social, index) in socials" :key="index" :href="social.href">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
  
      </div>
  
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        ©{{ new Date().getFullYear() }} Rental Mobil Jakarta. All Rights Reserved.
      </div>
    </footer>
  </template>
  
  <script>
  import { computed } from "vue";
  import { useI18n } from "vue-i18n";
  
  export default {
    name: "AppFooter",
    setup() {
      const { t } = useI18n();
  
      // Links footer reaktif seperti navbar
      const footerLinks = computed(() => [
        { key: "home", path: "#", name: t("home") },
        { key: "about", path: "#", name: t("about") },
        { key: "daftarHarga", path: "#", name: t("daftarHarga") },
        { key: "service", path: "#", name: t("service") },
        { key: "blog", path: "#", name: t("blog") },
      ]);
  
      const description =
      "Rental Mobil Jakarta adalah layanan penyewaan mobil terpercaya yang menyediakan berbagai pilihan kendaraan dengan harga terjangkau untuk kebutuhan perjalanan Anda.";

      const contactInfo = [
        { icon: "fas fa-map-marker-alt", text: "Jl. Teknologi No. 123, Jakarta, Indonesia" },
        { icon: "fas fa-phone", text: "+62 821-5877-6807" },
        { icon: "fas fa-envelope", text: "info@Rental Mobil Jakarta.com" },
        { icon: "fas fa-clock", text: "Senin - Jumat: 08:00 - 17:00" },
      ];
  
      const socialText =
        "Jangan lewatkan update terbaru dari kami. Terhubung melalui sosial media:";
  
      const socials = [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" },
        { icon: "fab fa-youtube", href: "#" },
      ];
  
      const year = new Date().getFullYear();
  
      return {
        footerLinks,
        description,
        contactInfo,
        socialText,
        socials,
        year,
      };
    },
  };
  </script>
  

  
  <style scoped>
        .footer {
            background: var(--primary-color);
            color: #fff;
            position: relative;
            overflow: hidden;
        }

        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--text-hover);
            background-size: 200% 100%;
            animation: gradientMove 3s linear infinite;
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 50px 20px 30px;
            position: relative;
        }

        .footer-section {
            flex: 1;
            min-width: 250px;
            margin-bottom: 30px;
            padding: 0 15px;
        }

        .logo {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 15px;
            background: var(--text-white);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }

        .footer-section p {
            font-size: 14px;
            color: #ccc;
            line-height: 1.8;
            margin-bottom: 20px;
            max-width: 300px;
        }

        .footer-section h3 {
            font-size: 18px;
            margin-bottom: 20px;
            color: var(--text-white);
            position: relative;
            padding-bottom: 10px;
        }

        .footer-section h3::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, var(--text-white), transparent);
        }

        .footer-section ul {
            list-style: none;
            padding: 0;
        }

        .footer-section ul li {
            margin: 12px 0;
            transition: transform 0.3s;
        }

        .footer-section ul li:hover {
            transform: translateX(5px);
        }

        .footer-section ul li a {
            color: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            transition: color 0.3s;
        }

        .footer-section ul li a:hover {
            color: var(--text-hover);
        }

        .footer-section ul li a i {
            margin-right: 10px;
            font-size: 14px;
            color: var(--text-white);
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #fff;
            font-size: 18px;
            transition: all 0.3s;
            text-decoration: none;
        }

        .social-links a:hover {
            background: var(--text-hover);
            transform: translateY(-5px);
        }

        .contact-info {
            margin-top: 20px;
        }

        .contact-info p {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            font-size: 14px;
        }

        .contact-info i {
            margin-right: 10px;
            color: var(--text-white);
            min-width: 20px;
            text-align: center;
        }

        .footer-bottom {
            background-color: var(--primary-color);
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: var(--text-white);
            position: relative;
        }

        .footer-bottom::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--text-hover), transparent);
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
            .footer-section {
                min-width: 50%;
            }
        }

        @media (max-width: 768px) {
            .footer-container {
                padding: 40px 15px 20px;
            }
            
            .footer-section {
                min-width: 100%;
                margin-bottom: 30px;
            }
        }

        @media (max-width: 480px) {
            .footer-container {
                padding: 30px 10px 15px;
            }
            
            .social-links {
                justify-content: left;
            }
            
            .footer-section h3 {
                text-align: left;
            }
            
        }
  </style>
  