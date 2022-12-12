<script setup>
import {getPostWithId} from '../firebase/posts.js'
import { ref } from 'vue';
import Details from '../components/Details.vue';
import {posts} from '../firebase/posts.js'

const post = ref({})
console.log(posts);
let id = new URLSearchParams(location.search).get("_id");
console.log(id);
post.value = getPostWithId(id)
console.log(post);



</script>

<template>
    <Details v-for="post in post" :post="post" :key="id" />
</template>

<style scoped>

</style>