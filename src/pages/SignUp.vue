<template>
  <div class="sign-up">
    <base-container>
      <div class="inner-wrapper">
        <img class="img" src="../assets/account.svg" alt="Register now" />
        <sign-up-form></sign-up-form>
      </div>
    </base-container>
  </div>
</template>

<script>
import SignUpForm from '../components/forms/SignUpForm.vue';

export default {
  components: { SignUpForm },
};
</script>

<style lang="scss" scoped>
.sign-up {
  background-color: var(--clr-bgr-light);
  min-height: 100vh;
}
.inner-wrapper {
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 825px) {
    .img {
      display: none;
    }
  }

  .img {
    width: 50%;
  }
}
</style>
