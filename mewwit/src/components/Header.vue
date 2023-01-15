<script setup>
import Inup from '@/components/Inup.vue'
import Nav from '@/components/Nav.vue'
import user from '../store/profile.js'
import {logOut} from '../firebase/auth.js'
import { RouterLink} from 'vue-router'


</script>

<template>
  <nav class="navbar bg-dark">
  <div class="container justify-content-center">
      <img src="@/assets/logomewnew.png" alt="logo" width="200" >
      <Nav />
      <div class="btn-group user__drop dropstart" v-if="user">
  <button type="button" class="btn user__btn btn-secondary " data-bs-toggle="dropdown" aria-expanded="false">
    <img class="user__img"  :src="user.photoURL? user.photoURL : 'https://picsum.photos/200'" alt="" srcset="">
  </button>

  <ul class="dropdown-menu">
    
<RouterLink to="/">  <button @click="logOut" type="button" class="btn logout__btn">
  Logout 
 </button> </RouterLink>

  </ul>
</div>


      <button v-if="!user" type="button" class="btn login__btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <img src="../assets/login.png" style="width: 100%;" alt="" srcset="">
</button>
 
  </div>
  <!-- Button trigger modal -->
  
</nav>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
  
        <Inup/>
            
</div>
 
 
</template>

<style scoped>
.login__btn{
  padding: 4px!important;
  width: 3.3rem;
    height: 2.8rem;
}
.login__btn:hover{
  background: var(--color2);
}
.user__drop{
  width: 3rem;
    height: 2.6rem;
   
}
.dropdown-menu{
  margin-top: 3.4rem!important;
  background: transparent;
  border: none;
  margin-left: 10rem!important;
  padding: 0!important;
  margin-right: -8rem!important;
}
.logout__btn{
  background: var(--color6);
  color: cornflowerblue;
  border: 2px solid var(--color1);
  font-weight: 700;
}
.user__btn{
  background: transparent!important;;
  padding: 0!important;
  border-radius: 25%;
  border: none;
}
.user__img{
  margin: -1rem;
  width: 100%;
  border-radius: 25%;
}
nav{
  border-bottom: 0.2rem solid var(--color3) !important;
  width: 100%;
  min-height: 8vh;
  position: fixed;
  z-index: 9;
}
.btn-primary{
    background: var(--color3);
}
nav >div{
  justify-content: space-around!important;
}
</style>