<script setup></script>

<template>
    <div class="footer d-flex">
        <h5>Mewwit</h5>
        <p>Diseñado por Matías Quiroga <a href="https://www.linkedin.com/in/mat%C3%ADasquiroga/"><i class="bi bi-linkedin"></i></a></p>
    </div>
</template>

<style scoped>
.footer{
    min-height: 8vh;
    background: var(--color6);
    border-top: 0.2rem solid var(--color3) !important;
    color: var(--color4);
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}
.footer > h5{
    font-size: 1.5rem;
    font-weight: 800;
}

.footer > p{
    font-size: 1.1rem;
    padding: 0.2rem;
}
</style>