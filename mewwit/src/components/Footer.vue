<script setup>
import user from '../store/profile.js';

</script>

<template>
    <div class="footer d-flex">
        <div class="d-flex bottom__menu" >
       
       <RouterLink to="/"><i class="bi bi-house-door" data-bs-dismiss="offcanvas"></i></RouterLink>
       <RouterLink to="/posts"><i class="bi bi-card-list" data-bs-dismiss="offcanvas"></i></RouterLink>

<div class="user__only" v-if="user">
       <RouterLink to="/profile"><i class="bi bi-person-circle" data-bs-dismiss="offcanvas"></i></RouterLink>
       <RouterLink to="/settings"><i class="bi bi-gear" data-bs-dismiss="offcanvas"></i></RouterLink>
    </div>

       <RouterLink to="/contact"><i class="bi bi-envelope-paper" data-bs-dismiss="offcanvas"></i></RouterLink>
       <RouterLink to="/rules"><i class="bi bi-info-circle" data-bs-dismiss="offcanvas"></i></RouterLink>
   
</div>
       
    </div>
</template>

<style scoped>
.user__only{
    display: flex;
    gap: 1rem;
}
.bi{
color:var(--color3);
font-size: 2rem;
}
.bottom__menu{
    width: 100%;
    align-items: center;
    gap:1rem;    
    justify-content: center;
    margin-left: 24px;
}
.footer{width: 100%;
    bottom: 0;
  position: fixed;
    margin-top: 1rem;
    min-height: 5vh;
    background: var(--color6);
    border-top: 0.2rem solid var(--color3) !important;
    color: var(--color4);
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}


</style>