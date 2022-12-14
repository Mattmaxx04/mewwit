<script setup>
import {comments} from '../store/comments.js'
import { ref, computed } from 'vue';
import  Comment  from './Comment.vue';

const commentsWithId = ref([])

const props = defineProps({
    postid: '',
    typeOf:String,
})

const updateComments = computed(()=>{
    commentsWithId.value = comments.value.filter(comment => comment.comment_postid === props.postid)
})
 

</script>

<template>
{{updateComments}}

   <Comment v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />

</template>

<style scoped>

</style>