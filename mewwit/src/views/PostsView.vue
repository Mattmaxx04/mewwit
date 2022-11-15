<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
    <h2>Posts</h2>
  <div class="post d-flex">
            <div v-for="i of 8" class="card" style="width: 18rem;">
                <img src="https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/38_afi_article1_caring-for-a-kitten-tips-for-the-first-month.png"
                    class="card-img-start" alt="...">
                <div class="card-body">
                    <div class="card__fav d-flex">
                    <h5 class="card-title">Card title</h5>
                    <div class="buttons">
                    <button class="btn "><i class="bi bi-star"></i></button>
                    <!-- <i class="bi bi-star-fill"></i> -->
                    <button class="btn "><i class="bi bi-heart"></i></button>
                    <!-- <i class="bi bi-heart-fill"></i> -->
                </div>
                </div>                   
                <RouterLink to="/details" class="btn btn-primary">More info</RouterLink>
                    
                </div>
            </div>
        </div>
</template>

<style scoped>
.card__fav{
    justify-content: space-between;
    align-items: center;
}
.post {
    padding-top: 2rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
}

.card-body{
    background: var(--color2);
}

.btn-primary{
    background: var(--color7);
}
</style>