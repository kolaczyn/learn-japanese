<template>
  <base-container>
    <section class="slogan">
      <h4>Interested?</h4>
      <h2>Get started <strong>now</strong></h2>
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
.slogan {
  text-align: center;
}
</style>
