<script setup>
import { ref } from 'vue'
import user from '../store/profile.js'
import { addPost } from '../firebase/posts.js'
import { posts } from '../firebase/posts.js'
import Card from '../components/Card.vue'

console.log(user);
const post_img = ref('')
const post_text = ref('')
const post_title = ref('')


const addNewPost = () => {
    const newPost = {
        post_id: crypto.randomUUID(),
        post_img: post_img.value,
        post_title: post_title.value,
        post_text: post_text.value,        
         user_id: user.id,
         user_pic:user.photoURL,
         user_name:user.displayName
    }
    addPost(newPost)
}

console.log(posts);
</script>

<template>
    <h2>Posts</h2>
    <div class="post__btn" v-if="user">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Post creation </button>
        
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">

        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h3 class="fw-bold mt-2 fs-2 sign">Post creation</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body p-5 pt-0">
                    <form class="">
                        <div class="form-floating mb-2">
                            <input v-model="post_title" type="text" class="form-control rounded-3" id="name"
                                placeholder="name">
                            <label for="name">title</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input v-model="post_img" type="url" class="form-control rounded-3" id="url"
                                placeholder="https:\\yourimage.png">
                            <label for="url">Image url</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input v-model="post_text" type="text" class="form-control rounded-3" id="title"
                                placeholder="your title">
                            <label for="title">message</label>
                        </div>
                        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            @click.prevent="addNewPost">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Card v-for="post in posts" :post="post" :key="post.id" />

</template>

<style scoped>
.post__btn {
    display: flex;
    justify-content: center;
}

.form__post {
    height: 8rem !important;
}

.card__fav {
    justify-content: space-between;
    align-items: center;
}

.post {
    padding-top: 2rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
}

.card-body {
    background: var(--color2);
}

.btn-primary {
    background: var(--color7);
}
</style>