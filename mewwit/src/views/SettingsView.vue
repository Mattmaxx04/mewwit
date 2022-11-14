<script setup>
import Profilehead from '@/components/Profilehead.vue'

</script>

<template>
  <Profilehead />
  <div class="settings">
  <h2>Settings</h2>
  
  <form id="settings__form" class="contact__form gap-2 d-flex">
  
<label class="name" for="name">Name:</label>
<input required type="text" class="field" placeholder="Name" id="contact-name">

<label for="Email" class="form-label">Email address:</label>
<input required type="email" class="field" placeholder="E-mail" id="contact-email">

<label for="Url" class="form-label">Image url:</label>
<input required type="url" class="field" placeholder="Image url" id="contact-img">

<label for="password" class="form-label">Password</label>
<input type="password" class="form-control" placeholder="Password" id="password">
<button type="submit" class="btn btn-primary" id="btnSubmit">Save Changes</button>


</form></div>
</template>

<style scoped>
 
 .settings{
    margin-top: 10rem;
 }
 #settings__form{
    
    flex-direction: column !important;;
    flex-wrap: wrap;
    justify-content: center;
   padding-left: 2rem;
    width: 90%;
 }
</style>