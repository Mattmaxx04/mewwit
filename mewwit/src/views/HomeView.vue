<script setup>

</script>

<template>
    <div id="carouselExampleSlidesOnly" class="carousel" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active slide">
                <img src="@/assets/proplanbanner.jpg" class="d-block w-100 slide" alt="banner1">
            </div>
            <div class="carousel-item slide">
                <img src="@/assets/royalbanner.png" class="d-block w-100 slide" alt="banner2">
            </div>
            <div class="carousel-item slide">
                <img src="@/assets/whiskasbanner.jpg" class="d-block w-100 slide" alt="banner3">
            </div>

        </div>
    </div>

    <div class="about d-flex">
        <h1>Mewwit</h1>
        <p>Mewwit is a vast communitie that is created,
            run, and populated by you: the Mewwit users.
        </p>
        <p>It is a platform for lovers of kittens and everything related to them.</p>
    </div>

    <div class="next d-flex">
        <h3>Upcoming events</h3>
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="@/assets/gatito2.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">World Champion – P.H.</h5>
                        <p class="card-text">In this class cats compete for the title „Best Variety“ and/or „Best in
                            Show”. They may receive
                            the Prize of Honour.
                            P.H.: Prix d’Honneur (Prize of Honour)</p>
                        <p class="card-text"><small class="text-muted">January 12, 2023 - January 15, 2023</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="@/assets/gatito3.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Kitten 6 – 10 months – CACJ</h5>
                        <p class="card-text">Cats exhibited in this class may not be younger than 6 months on the first day of the show and not older
than 10 months and must be registered in the LO or RIEX register of a recognized club.
Cats are separated by breed, colour and sex.
They are ranked and compete also for the title „Best Variety Kitten 6 – 10 months“ and/or
„Best in Show Kitten 6 – 10 months“.</p>
                        <p class="card-text"><small class="text-muted">February 3, 2023 - February 5, 2023</small></p>
                    </div>
                </div>
            </div>
        </div>

            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="@/assets/gatito1.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">GR. European Champion resp. GR. Continental Champion – CACM</h5>
                        <p class="card-text">In this class cats compete for the title „World Champion“. They must
                            receive CACM in 3
                            international shows of WCF in 3 different countries from 3 different judges, where one
                            country must be in another continent.
                            They must receive 98 points according to the standard.
                            Cats are separated by breed, colour and sex.
                            They compete also for the title “Best Variety” and/or „Best in Show“.
                            GR.: Grand</p>
                        <p class="card-text"><small class="text-muted">March 1, 2023 - March 5, 2023</small></p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="brand d-flex">
        <h4>Sponsors</h4>
        <div class="brand__img d-flex">
        <img src="@/assets/whiskas.png" class="img-fluid" alt="" srcset="">
        <img src="@/assets/royal.jpg" class="img-fluid" alt="" srcset="">
        <img src="@/assets/proplan.png" class="img-fluid" alt="" srcset="">
    </div>
</div>
</template>

<style scoped>
.brand__img{
    flex-direction: column;
}
.brand{
    gap:1rem;
    background-image: linear-gradient(to bottom, #023047, #14425b, #255471, #356786, #457b9d);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1rem;
    margin: 1rem;
    margin-left: 1.4rem;
    width: 90%;
    flex-direction: column
}
h4{
    text-align: center;
    color: antiquewhite;
}
.brand > img{
    width: 28%;
}
.card{
    width: 80%;
    background: var(--color1);
    color:var(--color5);
    font-weight: 600;
}
.next {
    color: #bedff5;
    margin-top: 1rem!important;
    max-width: 90vw;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0.3rem;
    background-image: linear-gradient(to bottom, #023047, #14425b, #255471, #356786, #457b9d);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.2rem;
}
.about {
    max-width: 90vw;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem!important;
    margin: auto;
    padding: 0.3rem;
    background-image: linear-gradient(to bottom, #023047, #14425b, #255471, #356786, #457b9d);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.2rem;
    color: rgb(167, 182, 218);
}

.about>p {
    text-align: center;
}

.slide {
    height: 18vh;
    width: 100%;
    margin-top: 0.5rem;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem #dee1d8);

}
.text-muted{
    color: var(--color7) !important;
}
.carousel-item>img {
    border-radius: var(--border-radius);
    object-position: center;
    object-fit: contain;
    max-height: 16vh;
    width: 80vw;
}

@media (orientation: landscape) {
    .carousel-item>img{

        width: 80vw;
    }

}
</style>