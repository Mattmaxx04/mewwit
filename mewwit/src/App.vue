<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView} from 'vue-router'
import AOS from 'aos';

onMounted(() => {
    AOS.init();
})

</script>

<template>
     
    <Header /> 
    
    <main>
      
    <RouterView />
  </main>
  <Footer />
  
</template>

<style scoped>
main{
  display: flex;
  padding-top: 6rem;
  flex-direction: column;
    align-items: center;
}

Header{
  max-width: 100vw;
}

Footer{
  max-width: 100vw;
}

</style>
