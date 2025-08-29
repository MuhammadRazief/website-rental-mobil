<template>
  <div id="app">
    <TopNavbar v-if="showMainLayout" />
    <Navbar v-if="showMainLayout" />
    <Whatsapp v-if="showMainLayout" />
    <Scroll v-if="showMainLayout" />
    <main class="main-content">
      <router-view />
    </main>
    <Footer v-if="showMainLayout" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import TopNavbar from './components/TopNavbar.vue';
import Footer from './components/Footer.vue';
import Whatsapp from './components/Whatsapp.vue';
import Scroll from './components/Scroll.vue';

export default {
  name: 'App',
  components: { Navbar, Footer, Whatsapp, Scroll, TopNavbar },
  setup() {
    const route = useRoute();

    const showMainLayout = computed(() => {
      return route.meta.layout !== 'empty';
    });

    return { showMainLayout };
  }
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
