<script setup>


const props = defineProps({
    post:{},
    typeof:Object
})

</script>

<template>
    <div class="post d-flex">        
            <div class="card" style="width: 100vw;">
                
                <div class="card-body">                    
                    <img v-if="!post.pic" class="img__user" src="https://picusm.photos/200" >
                    <img v-else :src="post.pic"   class="img__user" alt="...">                  
                    <div class="card__fav d-flex">

                    <h5 class="card-title">{{post.title}}</h5>
                    <h6>{{post.user}}</h6>
                    <p>{{post.body}}</p>

                    
                </div>                   
                <!--<RouterLink :to="'./details?_id='+post.id" class="btn btn-primary" :post="post" :key="post.id" >More info</RouterLink>
                    -->
                </div>
                <img :src="post.img"
                    class="card-img-start" alt="...">
                    <div class="buttons">
                    <button class="btn "><i class="bi bi-star"></i></button>
                    <!-- <i class="bi bi-star-fill"></i> -->
                    <button class="btn "><i class="bi bi-heart"></i></button>
                    <!-- <i class="bi bi-heart-fill"></i> -->
                </div>
            </div>
           
        </div>
        
</template>

<style scoped>
.bi{
    color: var(--color4);
}

.post{
    margin: 1rem;
    flex-direction: row;
    margin-top: 0;
    border-bottom: 2px solid var(--color2);
}
.img__user{
    width: 20%;
    border-radius: 50%;
    height: 25%;
}
.card__fav{

    margin-left: 2rem;
    padding: 0.5rem;
    display: flex!important;
    flex-direction: column;
}
.card{
    color: var(--color2);
    background: none !important;;
    border:none;
}
.card-body{
    display: flex;
}
</style>