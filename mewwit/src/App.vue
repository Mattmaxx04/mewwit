<script setup>

import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
     
    <Header /> 
    <Nav />
    <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 20vh;
}


</style>
