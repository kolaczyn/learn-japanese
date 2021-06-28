<template>
  <base-container class="container">
    <section class="slogan">
      <h4>Interested?</h4>
      <h2 class="spacing">Get started <strong>now</strong></h2>
      <base-button link mode="primary" to="/sign-up">Sign Up</base-button>
    </section>
  </base-container>
</template>

<script>
export default {
  name: 'StartNow',
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.spacing {
  margin-top: 0.35rem;
  margin-bottom: 0.35rem;
}
.slogan {
  text-align: center;
}
</style>
