<script setup>

const props = defineProps({
    post:{},
    typeof:Object
})

</script>

<template>
    <div class="details d-flex" >
    <div class="card" style="width: 18rem;">
        <img :src="post.img" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.description}}</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.details{
    padding: 1rem!important;
    justify-content: center;
}
.card-body{
    background: var(--color2);
}
</style>