<template>
    <section class="banner-card">
      <img src="@/assets/Banner.png" alt="Banner" />
    </section>
  </template>
  
  <script>
  export default {
    name: "BannerPage"
  };
  </script>
  
  <style scoped>
  .banner-card {
    width: 100%;
    max-width: 1200px;
    background-color: white;
    border-radius: 15px;
    /* overflow: hidden; */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    margin: 0 auto;
    text-align: center;
  }
  
  .banner-card img {
    width: auto;   /* jangan full width agar proporsional */
    max-width: 100%;
    height: auto;  /* menjaga proporsi */
    display: block;
    margin: 0 auto;
  }
  
  /* Hover effect */
  .banner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  /* Mobile / Tablet */
  @media (max-width: 768px) {
    .banner-card {
      width: 95%;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      padding: 20px 0;       /* menambah tinggi card */
    }
  
    .banner-card img {
      width: auto;           /* tetap proporsional */
      max-height: 400px;     /* tinggi maksimum gambar */
      object-fit: contain;   /* seluruh gambar terlihat */
    }
  }
  </style>
  