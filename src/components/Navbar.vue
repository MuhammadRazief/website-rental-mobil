<template>
    <header :class="['navbar', { 'scrolled': scrolled || menuOpen, 'menu-open': menuOpen }]">
      <div class="navbar-container">
        <!-- Logo -->
        <router-link to="/" class="logo" @click="menuOpen = false">
            <img src="@/assets/Logo-Rental.png" alt="NEXUS Logo" class="logo-img" />
            </router-link>

  
        <!-- Desktop Menu -->
        <nav class="nav-center">
          <router-link
            v-for="item in navItems"
            :key="item.key"
            :to="item.path"
            class="nav-item"
            :class="{ active: $route.path === item.path }"
            @click="menuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </nav>
  
        <!-- Right Section -->
        <div class="nav-right">
          <!-- Language Selector -->
          <div class="lang-selector" @click.stop>
            <button 
              class="lang-current"
              @click="toggleLangMenu"
              :aria-expanded="langMenuOpen"
              aria-label="Language selector"
            >
              <span class="flag" :class="currentLocale"></span>
              <span class="lang-name">{{ currentLocale === 'en' ? 'EN' : 'ID' }}</span>
              <i class="fas" :class="langMenuOpen ? 'fa-caret-up' : 'fa-caret-down'"></i>
            </button>
  
            <transition name="fade">
              <div v-if="langMenuOpen" class="lang-dropdown">
                <button @click="setLang('id')" :class="{ active: currentLocale === 'id' }">
                  <span class="flag id"></span>
                  <span>Indonesia</span>
                </button>
                <button @click="setLang('en')" :class="{ active: currentLocale === 'en' }">
                  <span class="flag en"></span>
                  <span>English</span>
                </button>
              </div>
            </transition>
          </div>
  
          <!-- Mobile Menu Toggle -->
          <button 
            class="hamburger"
            @click="toggleMenu"
            :aria-expanded="menuOpen"
            aria-label="Menu toggle"
            :class="{ 'active': menuOpen }"
          >
            <span class="hamburger-line top"></span>
            <span class="hamburger-line middle"></span>
            <span class="hamburger-line bottom"></span>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="menuOpen" class="mobile-menu" @click.stop>
          <div class="mobile-menu-inner">
            <router-link
              v-for="item in navItems"
              :key="item.key"
              :to="item.path"
              class="mobile-item"
              @click="toggleMenu"
              :class="{ active: $route.path === item.path }"
            >
              {{ item.name }}
              <i class="fas fa-chevron-right"></i>
            </router-link>
            
          </div>
        </div>
      </transition>
    </header>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  export default {
    name: 'PremiumNavbar',
    setup() {
      const { t, locale } = useI18n()
      const menuOpen = ref(false)
      const langMenuOpen = ref(false)
      const scrolled = ref(false)
      const currentLocale = ref('id')
  
      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value
        if (!menuOpen.value) langMenuOpen.value = false
      }
  
      const toggleLangMenu = () => {
        langMenuOpen.value = !langMenuOpen.value
      }
  
      const setLang = (lang) => {
        currentLocale.value = lang
        locale.value = lang
        localStorage.setItem('lang', lang)
        langMenuOpen.value = false
        setTimeout(() => location.reload(), 100)
      }
  
      const navItems = computed(() => [
        { key: 'home', path: '/', name: t('home') },
        { key: 'about', path: '/about', name: t('about') },
        { key: 'daftarHarga', path: '/price-list', name: t('daftarHarga') },
        { key: 'service', path: '/service', name: t('service') },
        { key: 'contact', path: '/contact', name: t('contact') },
      ])
  
      const handleScroll = () => (scrolled.value = window.scrollY > 10)
      
      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        const savedLang = localStorage.getItem('lang')
        if (savedLang) {
          currentLocale.value = savedLang
          locale.value = savedLang
        }
        
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.lang-selector')) {
            langMenuOpen.value = false
          }
          if (!e.target.closest('.hamburger') && !e.target.closest('.mobile-menu')) {
            menuOpen.value = false
          }
        })
      })
  
      return {
        menuOpen,
        langMenuOpen,
        toggleMenu,
        toggleLangMenu,
        setLang,
        currentLocale,
        scrolled,
        navItems
      }
    }
  }
  </script>
  
  <style>
  /* Base Styles */
  :root {
    --bg-color: #ffffff;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --transition: all 0.3s ease;
  }
  
  /* Navbar Base */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    transition: var(--transition);
    z-index: 1000;
    color: var(--text-color);
  }
  
  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow);
  }
  
  .navbar.menu-open {
    background: var(--bg-color);
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 4.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Logo */
  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    transition: var(--transition);
  }
  
  .logo-img {
  height: 40px; /* atur tinggi logo */
  width: auto;  /* biar proporsional */
}

  
  /* Desktop Menu */
  .nav-center {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-item {
    position: relative;
    text-decoration: none;
    font-weight: 500;
    color: inherit;
    padding: 0.5rem 0;
    transition: var(--transition);
  }
  
  .nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
  }
  
  .nav-item:hover,
  .nav-item.active {
    color: var(--primary-color);
  }
  
  .nav-item:hover::after,
  .nav-item.active::after {
    width: 100%;
  }
  
  /* Right Section */
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  /* Language Selector */
  .lang-selector {
    position: relative;
  }
  
  .lang-current {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
  }
  
  .lang-current:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
  
  .lang-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 0.5rem;
    background: var(--bg-color);
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    overflow: hidden;
    z-index: 10;
    min-width: 10rem;
  }
  
  .lang-dropdown button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .lang-dropdown button:hover {
    background: #f8fafc;
  }
  
  .lang-dropdown button.active {
    background: #f1f5f9;
  }
  
  .flag {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }
  
  .flag.id {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj48cGF0aCBmaWxsPSIjY2UxMTI2IiBkPSJNMCAwaDYwMHYyMDBIMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAyMDBoNjAwdjIwMEgweiIvPjwvc3ZnPg==');
  }
  
  .flag.en {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzAwIj48cGF0aCBmaWxsPSIjMDEyMTY5IiBkPSJNMCAwaDYwMHYzMDBIMHoiLz48cGF0aCBmaWxsPSIjY2MxMTI2IiBkPSJNLTQwIDBoNjQwdjMwMEgtNDB6IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAzMDAgMTUwKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMDAgMTUwaDMwMHYzMEgzMDB6IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAzMDAgMTUwKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNTAgMTUwaDMwMHYzMEgxNTB6IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgMTUwIDE1MCkiLz48L3N2Zz4=');
  }
  
  /* Improved Hamburger */
  .hamburger {
    display: none;
    position: relative;
    width: 2rem;
    height: 1.5rem;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    z-index: 20;
  }
  
  .hamburger-line {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: currentColor;
    left: 0;
    transition: var(--transition);
    transform-origin: center;
  }
  
  .hamburger-line.top {
    top: 0;
  }
  
  .hamburger-line.middle {
    top: 50%;
    transform: translateY(-50%);
  }
  
  .hamburger-line.bottom {
    bottom: 0;
  }
  
  /* Hamburger active state (X shape) */
  .hamburger.active .hamburger-line.top {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    background: var(--primary-color);
  }
  
  .hamburger.active .hamburger-line.middle {
    opacity: 0;
  }
  
  .hamburger.active .hamburger-line.bottom {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    background: var(--primary-color);
  }
  
  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    top: 4.5rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4.5rem);
    background: var(--bg-color);
    overflow-y: auto;
    z-index: 10;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .mobile-menu-inner {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .mobile-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    text-decoration: none;
    font-weight: 500;
    color: var(--text-color);
    border-radius: 0.5rem;
    transition: var(--transition);
  }
  
  .mobile-item i {
    color: var(--text-light);
    font-size: 0.875rem;
  }
  
  .mobile-item:hover,
  .mobile-item.active {
    background: #f8fafc;
    color: var(--primary-color);
  }
  
  .mobile-item:hover i,
  .mobile-item.active i {
    color: var(--primary-color);
  }
  
  /* Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  }
  
  .slide-down-enter-from,
  .slide-down-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .navbar-container {
      padding: 0 1.5rem;
    }
    
    .nav-center {
      display: none;
    }
    
    .hamburger {
      display: block;
    }
    
    .lang-current .lang-name {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    .navbar-container {
      padding: 0 1rem;
    }
    
    .logo {
      font-size: 1.25rem;
    }
    
    .mobile-menu {
      top: 4rem;
      height: calc(100vh - 4rem);
    }
    
    .mobile-item {
      padding: 1rem;
    }
  }
  </style>