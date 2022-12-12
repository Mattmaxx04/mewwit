<script setup>

const props = defineProps({
    comment: {},
    typeof: Object
})

</script>

<template>

    <div class="comments">
        <div class="comment">
            <div class="data__user">
                <p class="comment__user"></p>
                <img src="" alt="" srcset="">
            </div>
            <p class="comment__body"></p>
        </div>
    </div>
</template>

<style scoped>

</style>