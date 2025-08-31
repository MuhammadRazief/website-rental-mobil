<template>
    <div>
        <section class="cta-section">
        <h2>Siap Perjalanan Anda?</h2>
        <p>Pesan mobil sekarang dan nikmati perjalanan nyaman tanpa repot.</p>
        <button class="cta-button">Pesan Sekarang</button>
      </section>
    </div>
</template>
<script>
export default {
    name: "CtaLayanan",
}
</script>
<style>
    /* CTA Section */
.cta-section {
  background: #fff;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  text-align: center;
  padding: 70px 20px;
  border-radius: 50px 50px 0 0;
  margin-top: 70px;
}
.cta-section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 15px;
}
.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.cta-button {
  background: var(--primary-color);
  color: #fff;
  font-weight: bold;
  padding: 14px 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background: #f0f0f0;
  transform: scale(1.05);
}
</style>