<script setup>
import Inup from '@/components/Inup.vue';
import Nav from '@/components/Nav.vue';
</script>

<template>
  <nav class="navbar bg-dark">
  <div class="container justify-content-center">
      <img src="@/assets/logomewnew.png" alt="logo" width="200" >
      <Nav />
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i class="bi bi-door-closed"></i>
</button>
  </div>
  <!-- Button trigger modal -->
  
</nav>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
      
        <Inup />
            
</div>
 
 
</template>

<style scoped>
nav{
  border-bottom: 0.2rem solid var(--color3) !important;
  width: 100%;
  min-height: 8vh;
  position: fixed;
  z-index: 9;
}
.btn-primary{
    background: var(--color7);
}
nav >div{
  justify-content: space-around!important;
}
</style>