<script setup>

import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import { RouterView} from 'vue-router'


</script>

<template>
     
    <Header /> 
    
    <main>
      <Nav />
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>



</style>
