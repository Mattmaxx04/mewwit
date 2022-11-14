<script setup>
import { RouterLink} from 'vue-router'
</script>
<template>

  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
        <h1 class="fw-bold ms-1 mb-0 fs-2">Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
            
          <div class="form-floating mb-2">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating mb-2">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>

          <RouterLink to="/profile"><button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" data-bs-dismiss="modal">  Login</button></RouterLink>
        </form> 

          <hr class="my-4">

          <div class="modal-header border-bottom-0">
        <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
        <h1 class="fw-bold mt-2 fs-2 sign">Or sign up</h1>
        
      </div>
          <form class="">
            <div class="form-floating mb-2">
            <input type="text" class="form-control rounded-3" id="name" placeholder="name">
            <label for="name">Name</label>
          </div>
          <div class="form-floating mb-2">
            <input type="url" class="form-control rounded-3" id="url" placeholder="https:\\yourimage.png">
            <label for="url">Image url</label>
          </div>
          <div class="form-floating mb-2">
            <input type="email" class="form-control rounded-3" id="email" placeholder="name@example.com">
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-2">
            <input type="password" class="form-control rounded-3" id="password" placeholder="Password">
            <label for="password">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>

    
</template>
<style scoped>
.sign{
    padding-right: 5rem;
}
</style>