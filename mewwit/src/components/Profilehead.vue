<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="profile__card">
     <div class="profile__titles d-flex gap-">
        <h2>Matías</h2>       
                                   
        </div>
        <img class="profile__img" src="@/assets/chucho.jpg" alt="">
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

h2{
    margin-top: -5rem;
    padding-right: 0.3rem;
}
</style>