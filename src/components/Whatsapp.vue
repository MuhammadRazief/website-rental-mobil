<template>
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      class="whatsapp-button"
    >
      <i class="fab fa-whatsapp"></i>
    </a>
  </template>
  
  <script>
  export default {
    name: "WhatsappButton",
  };
  </script>
  
  <style scoped>
  .whatsapp-button {
    position: fixed;
    bottom: 20px;   /* jarak dari bawah */
    right: 20px;    /* jarak dari kanan */
    background-color: #2563eb;
    color: white;
    font-size: 28px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 9999;  /* selalu di atas */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
  }
  
  .whatsapp-button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
    background-color: #2563eb;
  }
  </style>
  