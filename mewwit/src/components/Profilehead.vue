<script setup>

const props = defineProps({
    user:{},
})

</script>

<template>
    <div v-if="user" class="profile__card">
     <div class="profile__titles d-flex gap-">
        <h3>{{user.displayName}}</h3>       
                                   
        </div>
        <img class="profile__img" :src="user.photoURL? user.photoURL : 'https://picsum.photo/200' " alt="">
    </div>
</template>

<style scoped>
.profile__img {
    margin-left: 8rem;
    width: 30%;
    border-radius: 40%;
    position: relative;
    margin-bottom: -3rem;

}

.profile__titles {
    background: var(--color3);
    width: 100vw;
    height: 20vh;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: -3rem;
    padding-right: 7rem;
    padding-top: 5rem;
    flex-direction: column;
}

h3{
    margin-bottom: 5rem;
    padding-right: 0.3rem;
}
</style>