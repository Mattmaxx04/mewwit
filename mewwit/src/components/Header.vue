<script setup>
import Inup from '@/components/Inup.vue';
</script>

<template>
  <nav class="navbar bg-dark">
  <div class="container justify-content-center">
      <img src="@/assets/logomewnew.png" alt="logo" width="200" >
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
  min-height: 8vh;
}
.btn-primary{
    background: var(--color7);
}
nav >div{
  justify-content: space-around!important;
}
</style>