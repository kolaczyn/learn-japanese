<template>
  <div class="wrapper">
    <h2 class="header">Welcome Back!</h2>
    <form action.prevent="submitForm">
      <section class="inputs">
        <base-input type="email" id="email">Your email</base-input>
        <base-input type="password" id="password">Your password</base-input>
      </section>
      <section class="checkboxes">
        <base-checkbox id="remember-me">Keep me logged in</base-checkbox>
      </section>
      <base-button link to="/learn" mode="primary full-width big" class="btn">Sign Up</base-button>
      <p>
        Don't have an account yet?
        <base-link to="/sign-up">Sign up</base-link>
        instead
      </p>
    </form>
  </div>
</template>

<script>
// import BaseInput from '../components/forms/BaseInput.vue';
import BaseInput from './BaseInput.vue';
import BaseCheckbox from './BaseCheckbox.vue';

export default {
  methods: {
    submitForm() {
      console.log('submitted');
    },
  },
  components: { BaseInput, BaseCheckbox },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 410px;
}

.header {
  font-size: 3rem;
  color: var(--clr-primary);
  margin-bottom: 1.5rem;

  @media screen and (max-width: 550px) {
    font-size: 2.25rem;
  }
}

.btn {
  margin-top: 0.85rem;
  margin-bottom: 1.5rem;
}
</style>
