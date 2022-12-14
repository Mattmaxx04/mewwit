<script setup>
import {addPost} from '../firebase/posts.js'
import { ref } from 'vue'
import user from '../store/profile.js'


const post_id = ref('')
const post_date = ref('')
const post_img = ref('')
const post_title = ref('')
const post_body = ref('')
const post_userid = ref('')
const post_uphoto = ref('')
const post_username = ref('')

const addNewPost = () => {
    const newPost = {
        post_id: crypto.randomUUID(),
        post_date: new Date(),
        post_img: post_img.value,
        post_title: post_title.value,
        post_body: post_body.value,
        post_userid: user.value.id,
        post_uphoto: user.value.photoURL,
        post_username: user.value.displayName
    }
    addPost(newPost)
    post_body.value=" "
    post_img.value=" "
    post_title.value=" "
}
</script>

<template>
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
                            <input v-model="post_body" type="text" class="form-control rounded-3" id="title"
                                placeholder="your title">
                            <label for="title">message</label>
                        </div>
                        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                            @click.prevent="addNewPost" data-bs-dismiss="modal">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.post__btn {
    display: flex;
    justify-content: center;
    margin: 1rem;
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