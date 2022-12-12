<script setup>
import { RouterLink } from 'vue-router'
import { loginWithGoogle } from '../firebase/auth.js'

</script>
<template>

  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="accordion" id="accordionExample">
<!--
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-
              expanded="true" aria-controls="collapseOne">

              Login

            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-
            parent="#accordionExample">
            <div class="accordion-body">

              <form class="">

                <div class="form-floating mb-2">
                  <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-2">
                  <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>

                <RouterLink to="/profile"><button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                    data-bs-dismiss="modal"> Login</button></RouterLink>
              </form>


            </div>
          </div>
        </div>
-->
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

              Login with Google

            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">

              <RouterLink to="/profile"> <button class="btn btn-lg btn-block btn-primary"
                  style="background-color: #dd4b39;" @click="loginWithGoogle" data-bs-dismiss="modal"><i
                    class="bi bi-google me-2"></i> Sign in with google</button></RouterLink>

            </div>
          </div>
        </div>
<!--
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

              Sign In

            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">

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
-->
      </div>

    </div>
  </div>


</template>
<style scoped>
.sign {
  padding-right: 5rem;
}
</style>