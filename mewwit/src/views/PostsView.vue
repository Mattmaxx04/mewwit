<script setup>
import { RouterLink} from 'vue-router'
import { ref} from 'vue';

const posts = ref([
    {id: crypto.randomUUID(),title: "Gatito 1",img: "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/38_afi_article1_caring-for-a-kitten-tips-for-the-first-month.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 2",img: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 3",img: "https://images.unsplash.com/photo-1591871937631-2f64059d234f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 4",img: "https://estaticos.muyinteresante.es/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 5",img: "https://estaticos.muyinteresante.es/uploads/images/gallery/59a669fc5bafe88febb3d6cc/gatito-cesped_0.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 6",img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1199242002.jpg?crop=0.666xw:1.00xh;0.201xw,0&resize=480:*", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 7",img: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
    {id: crypto.randomUUID(),title: "Gatito 8",img: "https://superpet.pe/blog/wp-content/uploads/2021/07/Gatitos-bebe%CC%81s-Co%CC%81mo-cuidar-de-ellos-.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio esse tempora reiciendis inventore voluptates ut accusantium nisi pariatur laborum."},
])

console.log(posts);
</script>

<template>
    <h2>Posts</h2>
  <div class="post d-flex">
            <div v-for="post in posts" class="card" style="width: 18rem;">
                <img :src="post.img"
                    class="card-img-start" alt="...">
                <div class="card-body">
                    <div class="card__fav d-flex">
                    <h5 class="card-title">{{post.title}}</h5>
                    <div class="buttons">
                    <button class="btn "><i class="bi bi-star"></i></button>
                    <!-- <i class="bi bi-star-fill"></i> -->
                    <button class="btn "><i class="bi bi-heart"></i></button>
                    <!-- <i class="bi bi-heart-fill"></i> -->
                </div>
                </div>                   
                <RouterLink :to="'./details?_id='+post.id" class="btn btn-primary">More info</RouterLink>
                    
                </div>
            </div>
        </div>
</template>

<style scoped>
.card__fav{
    justify-content: space-between;
    align-items: center;
}
.post {
    padding-top: 2rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
}

.card-body{
    background: var(--color2);
}

.btn-primary{
    background: var(--color7);
}
</style>