<script setup>

</script>

<template>
  <h2>Rules and policies</h2>
  <div class="rules container">

    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h6 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Mewwit Content Policy
          </button>
        </h6>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Mewwit</strong> is a vast communitie that is created, run, and populated by you: the Mewwit users.
            Through these communitie, you can post, comment, vote, discuss, learn, debate, support, and connect with
            people who share your interest, and we encourage you to find or even create your home on Mewwit. Everyone on
            Mewwit should have an expectation of privacy and safety, so please respect the privacy and safety
            of others.
            Mewwit and its communities are only what we make of them together, and can only exist if we operate by a
            shared set of rules. We ask that you abide by not just the letter of these rules, but the spirit as well.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="headingTwo">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            Rule 1
          </button>
        </h6>
        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Remember the human.</strong> Mewwit is a place for creating community and belonging, not for
            attacking marginalized
            or vulnerable groups of people. Everyone has a right to use Mewwit free of harassment, bullying, and threats
            of violence. Post that incite violence or that promote hate based on identity or
            vulnerability will be banned.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h6 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Rule 2
          </button>
        </h6>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Abide by community rules. </strong>Post authentic content into post where you have a personal
            interest, and do
            not cheat or engage in content manipulation (including spamming, vote manipulation, ban evasion, or
            subscriber fraud) or otherwise interfere with or disrupt Mewwit communitie.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h6 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Rule 3
          </button>
        </h6>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Respect the privacy of others. </strong>Instigating harassment, for example by revealing someone’s
            personal or
            confidential information, is not allowed. Never post or threaten to post intimate or sexually-explicit media
            of someone without their consent.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h6 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Rule 4
          </button>
        </h6>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Do not post or encourage the posting of sexual or suggestive content involving minors. </strong>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h6 class="accordion-header" id="headingSix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Rule 5
          </button>
        </h6>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>You don’t have to use your real name to use Mewwit </strong>, but don’t impersonate an individual or
            an entity in a
            misleading or deceptive manner.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h6 class="accordion-header" id="headingSeven">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Rule 6
          </button>
        </h6>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Keep it legal, and avoid posting illegal content or soliciting or facilitating illegal or prohibited
              transactions.</strong>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h6 class="accordion-header" id="headingEight">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            Rule 7
          </button>
        </h6>
        <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Dont break the site or do anything that interferes with normal use of Mewwit.</strong>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
h2 {
  padding: 1rem !important;
  font-family: var(--font-familiy1);
}

.rules {
  border: 2px solid var(--color5) !important;
  border-radius: 1rem;
  color: var(--color2);
  padding: 1rem;
  margin: 1rem;

  max-width: 90%;
  min-height: 80vh;
}

.accordion {
  text-align: center;
  background-color: var(--color4) !important;
  border-color: var(--color2);
}

.accordion-button {
  background-color: transparent;
  color: var(--color2);
  font-size: 1.2rem;
  font-weight: 700 !important;
  text-align: center;
}

.accordion-header::after {
  background-color: black !important;
}

.accordion-item {
  background-color: transparent;
  font-weight: 500 !important;
}
</style>