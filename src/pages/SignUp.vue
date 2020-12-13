<template>
  <base-container>
    <div class="sign-up-page">
      <img class="sign-up-hero" src="../assets/account.svg" alt="Register now" />
      <sign-up-form></sign-up-form>
    </div>
  </base-container>
</template>

<script>
import SignUpForm from '../components/forms/SignUpForm.vue';

export default {
  components: { SignUpForm },
};
</script>

<style lang="scss" scoped>
.sign-up-page {
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .sign-up-hero {
    width: 50%;
  }
}
</style>
