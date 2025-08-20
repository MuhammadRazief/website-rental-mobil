<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  /* overflow-x: hidden; */
}

.main-content {
  width: 100%;
}

</style>
