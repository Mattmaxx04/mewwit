<script setup>


const props = defineProps({
    comment: {},
    typeOf:Object,
})


</script>

<template>
 <div class="comments">
        <div class="comment">
           <div class="data__user">
                
                <img class="img__user" :src="comment.comment_uphoto? comment.comment_uphoto : 'https://picsum.photo/200'" alt="" srcset="">
                <p class="comment__user">@{{comment.comment_username}}</p>
            </div>
            
          <p class="comment__body">{{comment.comment_body}}</p> 
        </div>
    </div>
</template>

<style scoped>
.comments{
    margin: 1rem;
    background: #118ab2;
    border: 2px solid var(--color1);
    border-radius: 0.5rem;
}
.data__user{
    display: flex;
    align-items: center;
}
.comment__body{
    text-align: center;
}
.img__user{
    margin: 0.5rem;
    max-width: 15%;
    border-radius: 50%;
}
</style>