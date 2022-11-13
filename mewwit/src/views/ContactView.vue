<script setup>

</script>

<template>
    <h2>Work with us</h2>
  
    <form id="workwithus" class="contact__form gap-2 d-flex">
        <img src="@/assets/catpost.png" alt="">
  <label class="name" for="name">Name:</label>
  <input required type="text" class="field" placeholder="Name" id="contact-name">

  <label for="Email" class="form-label">Email address:</label>
  <input required type="email" class="field" placeholder="E-mail" id="contact-email">

  <label for="Url" class="form-label">Linkedin profile:</label>
  <input required type="url" class="field" placeholder="Linkedin profile" id="contact-email">

  <label for="Message" class="form-label">About you:</label>
  <textarea required placeholder="About you" class="field" id="contact-message"></textarea>
  <button type="submit" class="btn btn-primary" id="btnSubmit">Submit</button>


</form>
</template>

<style scoped>
.field{
    font-size: 1.5rem;
    background: var(--color2);
    color:var(--color1)
}
#workwithus{
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
    width: 90%;
}
h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
}
</style>