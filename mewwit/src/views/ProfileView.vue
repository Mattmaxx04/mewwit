<script setup>
import Profilehead from '@/components/Profilehead.vue'
import Inup from '../components/Inup.vue';
import user from '../store/profile.js'
import Posts from '../components/Posts.vue'
import { posts } from '../store/posts.js';
import { ref, computed, onMounted } from 'vue';
import { getComments } from '../firebase/comments.js';
import { getPosts } from '../firebase/posts';

console.log(user);
/*const userid = ref("")*/
onMounted(()=>{
    getComments()
    getPosts()
})


const postsWithId = ref([])
/*console.log(posts.value);

userid.value = user.id;
console.log(userid);
*/
console.log(user.value.id);
console.log(posts.value);
const updatePosts = computed(()=>{
    postsWithId.value = posts.value.filter(post => post.userid === user.value.id)
})


console.log(postsWithId);
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
    <Posts data-aos="fade-up"
     data-aos-delay="500"  v-for="post in postsWithId" :post="post" :key="post_id" />
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
    max-width: 85vw;
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