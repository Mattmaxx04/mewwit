<script setup>

import { posts } from '../store/posts.js'
import Posts from '../components/Posts.vue'
import NewPost from '../components/NewPost.vue'
import { getComments } from '../firebase/comments.js';
import { getPosts } from '../firebase/posts';
import { onMounted } from 'vue';
import { comments } from '../store/comments.js';

onMounted(()=>{
    getComments()
    getPosts()
})


console.log(comments);
console.log(posts);

</script>

<template>
    <h2>Posts</h2>
   
    <NewPost />
    <Posts v-for="post in posts" :post="post" :key="post.id" />


</template>

<style scoped>

#Posts{
    max-width: 96vw;
}
</style>