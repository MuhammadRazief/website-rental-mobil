<template>
  <div class="container">

    <!-- Kontak Detail -->
    <section class="contact-section">
      
      <!-- Info Kontak -->
      <div class="contact-info">
        <h2>Informasi Kontak</h2>
        <p>Kami siap membantu perjalanan Anda. Silakan hubungi tim kami melalui telepon, WhatsApp, atau email.</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
              </svg>
            </div>
            <div class="contact-text">
              <strong>Alamat</strong>
              <span>Jl. Sudirman No. 123, Jakarta</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
            </div>
            <div class="contact-text">
              <strong>Email</strong>
              <span>support@rentalmobil.com</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div class="contact-text">
              <strong>Telepon</strong>
              <span>+62 812 3456 7890</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div class="contact-text">
              <strong>Jam Operasional</strong>
              <span>08.00 - 21.00 WIB</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulir Kontak -->
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

.contact-section {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  transition: transform 0.3s;
}

.contact-section:hover {
  transform: translateY(-5px);
}

.contact-info {
  flex: 1 1 45%;
}

.contact-info h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #222;
}

.contact-info p {
  font-size: 16px;
  margin-bottom: 25px;
  color: #555;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px 20px;
  border-radius: 12px;
  background: #f1f5f9;
  transition: background 0.3s;
}

.contact-item:hover {
  background: #e0f2ff;
}

.contact-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.contact-item:hover .contact-icon {
  background: #0056b3;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
}

.contact-text {
  display: flex;
  flex-direction: column;
}

.contact-text strong {
  color: #007bff;
  font-weight: 500;
  margin-bottom: 3px;
}

.contact-text span {
  color: #333;
  font-size: 15px;
}

.contact-form {
  flex: 1 1 45%;
}

.contact-form h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #222;
}

.form-group {
  margin-bottom: 18px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0,123,255,0.2);
}

button {
  background: #007bff;
  color: white;
  padding: 14px 22px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
}

/* Responsif */
@media (max-width: 1024px) {
  .contact-section {
    flex-direction: column;
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .contact-info, .contact-form {
    flex: 1 1 100%;
  }
}
</style>
