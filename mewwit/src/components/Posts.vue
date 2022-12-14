<script setup>
import Newcomment from './NewComment.vue';
import Comments from './Comments.vue';


const props = defineProps({
    post: {},
    typeof: Object
})

</script>

<template>
    <div class="post d-flex"  data-aos="fade-right">


        <div class="card" style="max-width: 94vw;">
            <div class="user__data">
            <img v-if="!post.pic" class="img__user" src="https://picsum.photos/200">
            <img v-else :src="post.pic" class="img__user" alt="...">
            <h6>@{{ post.user }}</h6>
        </div>
            <div class="card-body">

                <div class="card__fav d-flex">

                    <h5 class="card-title">{{ post.title }}</h5>

                    <p>{{ post.body }}</p>


                </div>
                <!--<RouterLink :to="'./details?_id='+post.id" class="btn btn-primary" :post="post" :key="post.id" >More info</RouterLink>
                    -->
            </div>
            <div class="img__post">
            <img :src="post.img" class="card-img-start" alt="...">
        </div>
            <div class="buttons">
                <button class="btn "><i class="bi bi-star"></i></button>
                <!-- <i class="bi bi-star-fill"></i> -->
                <button class="btn "><i class="bi bi-heart"></i></button>
                <!-- <i class="bi bi-heart-fill"></i> -->
                <button class="btn "><i class="bi bi-chat-dots"></i></button>
            </div>

        </div>

        <div v-if="user" class="comments">
            <Newcomment :postid="post.id"/>
            <Comments :postid="post.id"/>


        </div>

    </div>

</template>

<style scoped>
.img__post{
    display: flex;
    justify-content: center;
}
.user__data{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.comments{
    background-image: linear-gradient(to bottom, #023047, #14425b, #255471, #356786, #457b9d);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid var(--color1);
    border-radius: 0.5rem;
}

h3 {
    text-align: end;
    margin-right: 2rem;
}

.buttons {
    text-align: center;
}

.bi {
    font-size: 1.5rem;
    color: var(--color4);
}

.post {
    filter: drop-shadow(0 0 0.3rem #c58309);
    background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin: 1rem;
    padding: 0.5rem;
    flex-direction: column;
    margin-top: 0;
    border: 2px solid var(--color1);
    border-radius: 0.5rem;
}

.img__user {
    filter: drop-shadow(0 0 0.3rem #dee1d8);
    padding: 0.5rem;
    width: 20%;
    border-radius: 50%;
    height: 25%;
}

.card-img-start {
    filter: drop-shadow(0 0 0.3rem #dee1d8);
    width: 60%;
    margin: 2rem;
    border-radius: 5%;
}

.card__fav {

    margin-left: 2rem;
    padding: 0.5rem;
    display: flex !important;
    flex-direction: column;
}

.card {
    color: var(--color2);
    background: none !important;
    ;
    border: none;
}

.card-body {
    display: flex;
}
</style>