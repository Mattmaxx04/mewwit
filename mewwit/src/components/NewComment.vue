<script setup>
import {addComment} from '../firebase/comments.js'
import user from '../store/profile.js'
import { ref } from 'vue';

const body = ref('')

const props = defineProps({
    postid: '',
    typeOf:String,
})

const addNewComment = () => {
    const newComment = {
        comment_id: crypto.randomUUID(),
        comment_date:new Date(), 
        comment_body: body.value,
        comment_postid: props.postid,
        comment_uphoto: user.value.photoURL,
        comment_username: user.value.displayName
    }
    addComment(newComment)
    body.value=""
}
</script>

<template>
    <form >
        <input v-model="body" type="text" placeholder="Place your comment here">
        <button @click.prevent="addNewComment"><i class="bi bi-send"></i></button>
    </form>
</template>

<style scoped>
form{
    margin: 1rem;
    display: flex;
    width: 90%;
    height: 3rem;
}

input{
    border-radius: 1rem 0rem 0rem 1rem;
    width: 90%;
    background-color: var(--color2);
}
button{

    width: 14%;
    margin-top: 0.2rem;
    background-color: var(--color3);
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0 1rem 1rem 0rem;
}
</style>