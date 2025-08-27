<template>
    <div class="login-page">
      <div class="login-card">
        <h1>Admin Login</h1>
  
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="form.email" placeholder="admin@mail.com" required />
          </div>
  
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.password" placeholder="********" required />
          </div>
  
          <button type="submit" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>
  
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </template>

<script>
import { reactive, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'LoginPage',
  setup(){


    const form = reactive({
        email: '',
        password: ''
    })
    const loading = ref(false)
    const error = ref(null)

    const handleLogin = async () => {
        loading.value = true
        error.value = null

        try {
            const response = await axios.post('http://localhost:8000/api/login', form)
            console.log('Login successful:', response.data)
            // Simpan token atau lakukan navigasi ke halaman lain
        } catch (err) {
            error.value = 'Login failed. Please check your credentials.'
            console.error('Login error:', err)
        } finally {
            loading.value = false
        }
    }
    return { form, loading, error, handleLogin }
  }
}
</script>