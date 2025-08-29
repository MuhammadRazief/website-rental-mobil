<template>
    <div class="top-navbar">
      <div class="container">
        <div class="top-container">
          <div class="left">
            <!-- WhatsApp link -->
            <span>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener">
                <i class="fab fa-whatsapp"></i> 081234567890
              </a>
            </span>
            <span>
              <i class="fas fa-envelope"></i> support@rentalmobil.com
            </span>
          </div>
          <div class="right">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TopNavbar"
  };
  </script>
  
  <style scoped>
  .top-navbar {
    background: var(--primary-color);
    color: #fff;
    font-size: 14px;
    padding: 10px 0;
  }
  
  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .left span {
    margin-right: 20px;
    display: inline-block;
  }
  
  .left span a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
  
  .left span a:hover {
    color: #25d366; /* warna hijau WhatsApp */
  }
  
  .right a {
    background: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;   
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--primary-color);
    margin-left: 10px;
    transition: color 0.3s;
  }
  
  .right a:hover {
    color: #007bff;
  }
  
  /* Responsive Mobile */
  @media (max-width: 768px) {
    .top-navbar {
    display: none;
  }
  }
  </style>
  