<script setup>
import Profilehead from '@/components/Profilehead.vue'
import Inup from '../components/Inup.vue';
import user from '../store/profile.js'
import Posts from '../components/Posts.vue'
import { posts } from '../store/posts.js';
import { ref, computed } from 'vue';

const postsWithId = ref([])



const updatePosts = computed(()=>{
    postsWithId.value = posts.value.filter(post => post.post_userid === user.id)
})

</script>

<template>
    {{updatePosts}}

<Profilehead :user="user"  />

<div v-if="!user" class="profile__help">
    <Inup />
</div>
    <div  v-if="user" class="profile d-flex">

   <div class="profile__post d-flex">
    <h2>My posts</h2>
    <Posts v-for="post in postsWithId" :post="post" :key="post_id" />
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