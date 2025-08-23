<template>
    <div class="container">

      <!-- Kontak Detail -->
      <section class="contact-section">
        <div class="contact-info">
          <h2>Informasi Kontak</h2>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              </div>
              <div class="contact-text">
                <strong>Alamat:</strong> Jl. Sudirman No. 123, Jakarta
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
              </div>
              <div class="contact-text">
                <strong>Email:</strong> support@rentalmobil.com
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="contact-text">
                <strong>Telepon:</strong> +62 812 3456 7890
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div class="contact-text">
                <strong>Jam Operasional:</strong> 08.00 - 21.00 WIB
              </div>
            </div>
          </div>
        </div>
  
        <!-- Formulir -->
        <div class="contact-form">
          <h2>Kirim Pesan</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" placeholder="Nama Lengkap" v-model="form.name" required />
            </div>
            <div class="form-group">
              <input type="email" placeholder="Alamat Email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <textarea placeholder="Pesan Anda" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </section>
  
      <!-- Map -->
      <section class="map-section">
        <h2>Lokasi Kami</h2>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135063955!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390897e759%3A0x6b45e67ae54d8c2f!2sJl.%20Jend.%20Sudirman%2C%20RT.5%2FRW.4%2C%20Kuningan%2C%20Kecamatan%20Setiabudi%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1643013457033!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'KontakDetail',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        alert(`Terima kasih ${this.form.name}! Pesan Anda berhasil dikirim.`);
        this.form = { name: '', email: '', message: '' };
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .contact-section {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .contact-info, .contact-form {
    flex: 1;
    min-width: 300px;
  }
  
  .contact-info h2 {
    color: var(--primary-color);
    font-size: 28px;
    margin-bottom: 30px;
    position: relative;
    padding-bottom: 15px;
  }
  
  .contact-info h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), #4facfe);
    border-radius: 2px;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 15px;
    border-radius: 10px;
    transition: all 0.3s ease;
    background: #f9f9f9;
  }
  
  .contact-item:hover {
    background: #f0f7ff;
    transform: translateX(5px);
  }
  
  .contact-icon {
    width: 24px;
    height: 24px;
    color: var(--primary-color);
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .contact-text {
    color: #555;
    line-height: 1.5;
  }
  
  .contact-form {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  
  .contact-form h2 {
    color: var(--primary-color);
    font-size: 28px;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 15px;
  }
  
  .contact-form h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), #4facfe);
    border-radius: 2px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(13, 94, 166, 0.1);
  }
  
  .contact-form button {
    background: linear-gradient(90deg, var(--primary-color), #4facfe);
    color: white;
    padding: 14px 28px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  .contact-form button:hover {
    background: linear-gradient(90deg, #0b4a82, #3ba1fe);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(13, 94, 166, 0.2);
  }
  
  .map-section {
    padding: 40px 20px;
    background: #f8faff;
    margin-top: 20px;
  }
  
  .map-section h2 {
    text-align: center;
    color: var(--primary-color);
    font-size: 28px;
    margin-bottom: 30px;
  }
  
  .map-container {
    max-width: 1200px;
    margin: 0 auto;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-section {
    padding: 50px 20px;
    gap: 30px;
  }

  .contact-info h2,
  .contact-form h2,
  .map-section h2 {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
    padding: 40px 16px;
    gap: 25px;
  }

  .contact-info, .contact-form {
    width: 100%;
    min-width: auto;
  }

  .contact-form {
    padding: 20px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 14px;
    padding: 12px 14px;
  }

  .contact-form button {
    font-size: 15px;
    padding: 12px 20px;
  }

  .map-container {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
    padding: 12px;
  }

  .contact-icon {
    align-self: center;
    width: 20px;
    height: 20px;
  }

  .contact-text {
    font-size: 14px;
  }

  .contact-info h2,
  .contact-form h2,
  .map-section h2 {
    font-size: 20px;
  }

  .contact-form {
    padding: 18px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 14px;
    padding: 10px 12px;
  }

  .contact-form button {
    font-size: 14px;
    padding: 10px 16px;
  }

  .map-container {
    height: 220px;
  }
}

@media (max-width: 360px) {
  .contact-text {
    font-size: 13px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 13px;
    padding: 8px 10px;
  }

  .contact-form button {
    font-size: 13px;
    padding: 10px;
  }

  .map-container {
    height: 200px;
  }
}

  </style>