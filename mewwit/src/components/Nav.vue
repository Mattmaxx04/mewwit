<script setup>
import { RouterLink} from 'vue-router'

</script>

<template>
    
    <button class="btn huella" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <img src="@/assets/huella.png" alt="" width="30">
    </button>
    <div class="offcanvas offcanvas-top d-flex" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTop">
       
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
}
.offcanvas, .offcanvas-top{  
    margin-top: 5.1rem;
    width: 100%;
    height: 2.5rem!important;
    flex-direction:row;
    background: var(--color1);
    align-items: center;
    gap:1rem;
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