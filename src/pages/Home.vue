<template>
  <div class="home">
    <!-- Banner -->
    <Banner />

    <!-- Daftar Mobil Section -->
    <section class="cars">
      <h2 class="cars-title">Daftar Mobil</h2>
      <div class="cars-grid">
        <div class="car-card" v-for="(car, index) in cars" :key="index">
          <img :src="car.image" :alt="car.name" class="car-image" />
          <div class="car-info">
            <h3>{{ car.name }}</h3>
            <p class="price">Rp {{ car.price }}/hari</p>
            <button class="rent-btn">Sewa Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "HomePage",
  components: {
    Banner,
  },
  data() {
    return {
      cars: [
        {
          name: "Toyota Avanza",
          price: "500.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Honda Jazz",
          price: "550.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Mitsubishi Pajero",
          price: "1.200.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Mitsubishi Pajero",
          price: "1.200.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Mitsubishi Pajero",
          price: "1.200.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Mitsubishi Pajero",
          price: "1.200.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Mitsubishi Pajero",
          price: "1.200.000",
          image: require("@/assets/avan.png"),
        },
        {
          name: "Mitsubishi Pajero",
          price: "1.200.000",
          image: require("@/assets/avan.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  align-items: center;
  overflow-x: hidden;
}

/* Daftar Mobil Section */
.cars {
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
  text-align: center;
}

.cars-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 50px;
  color: #222;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.car-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
}

.car-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.15);
}

.car-image {
  width: 100%;
  height: auto; /* biar tinggi menyesuaikan */
  object-fit: contain; /* gambar tidak terpotong */
  background: #f4f4f4; /* kasih background abu tipis kalau ada ruang kosong */
}


.car-info {
  padding: 20px;
  text-align: left;
}

.car-info h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #222;
}

.price {
  font-size: 1rem;
  font-weight: 600;
  color: #2a5298;
  margin-bottom: 15px;
}

.rent-btn {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  color: white;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.rent-btn:hover {
  background: linear-gradient(90deg, #2a5298, #1e3c72);
}
</style>
