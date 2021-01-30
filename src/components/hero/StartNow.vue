<template>
  <div class="start-now">
    <base-container>
      <section class="slogan">
        <h4>Interested?</h4>
        <h2>Get started <strong>now</strong></h2>
        <base-button link mode="primary" to="/sign-up">Sign Up</base-button>
      </section>
    </base-container>
  </div>
</template>

<style lang="scss" scoped>
.start-now{
  background-color: var(--clr-bgr-light);
  filter: drop-shadow(0 0 4px rgba(black, 0.15));
  /* for now */
  min-height: 400px;
}
</style>
