<script setup>
import Profilehead from '@/components/Profilehead.vue'
import { RouterLink} from 'vue-router'
</script>

<template>
<Profilehead />
    <div class="profile d-flex">

   <div class="profile__post d-flex">
    <h2>My posts</h2>
            <div v-for="i of 5" class="card" style="width: 18rem;">
                <img src="https://t2.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_orig.jpg"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card__fav d-flex">
                    <h5 class="card-title">Card title</h5>
                    <div class="buttons">
                    <button class="btn "><i class="bi bi-star"></i></button>
                    <!-- <i class="bi bi-star-fill"></i> -->
                    <button class="btn "><i class="bi bi-heart"></i> <p>0</p> </button>
                    <!-- <i class="bi bi-heart-fill"></i> -->
                </div>
                </div>
                <RouterLink to="/details" class="btn btn-primary">More info</RouterLink>
                   
                    
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
.btn-primary{
    background: var(--color7);
}
.card-body{
    background: var(--color2);
}
.profile {
    flex-direction: column;
    align-items: center;
    min-height: 40vh;
}

.card__fav{
    justify-content: space-between;
    align-items: center;
}

.profile__post {
    margin-top: 7rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
}
.bi{
    font-size: 1.5rem;
    margin: 0.2rem;
}
</style>