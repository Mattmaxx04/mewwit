<script setup>
import { RouterLink} from 'vue-router'

</script>

<template>
    
    <button class="btn huella" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <img src="@/assets/huella.png" alt="" width="30">
    </button>
    <div class="offcanvas offcanvas-start d-flex" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
       
            <RouterLink to="/"><i class="bi bi-house-door" data-bs-dismiss="offcanvas"></i></RouterLink>
            <RouterLink to="/posts"><i class="bi bi-card-list" data-bs-dismiss="offcanvas"></i></RouterLink>
            <RouterLink to="/profile"><i class="bi bi-person-circle" data-bs-dismiss="offcanvas"></i></RouterLink>
            <RouterLink to="/settings"><i class="bi bi-gear" data-bs-dismiss="offcanvas"></i></RouterLink>
            <RouterLink to="/contact"><i class="bi bi-envelope-paper" data-bs-dismiss="offcanvas"></i></RouterLink>
            <RouterLink to="/rules"><i class="bi bi-info-circle" data-bs-dismiss="offcanvas"></i></RouterLink>
        
    </div>

    
</template>

<style scoped>
.huella{
    background: var(--color3);
    margin: 0.5rem;
    border: 2px solid var(--color6);
    z-index: 999;
    position: fixed;
}
.offcanvas, .offcanvas-start{
    
    margin-top: 4.2rem;
    margin-left: 0.5rem;
    width: 20%!important;
    height: 35%;
    background: var(--color1);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 2rem;
    flex-wrap: nowrap;
    z-index: 9999!important;
}
.bi{
color:var(--color3);
font-size: 2rem;
}

</style>