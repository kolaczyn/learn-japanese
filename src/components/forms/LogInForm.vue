<template>
  <div class="wrapper">
    <h2 class="header">Welcome Back!</h2>
    <form @submit.prevent="logIn">
      <section class="inputs">
        <base-input v-model="email" type="email" id="email">Your email</base-input>
        <base-input v-model="password" type="password" id="password">Your password</base-input>
      </section>
      <section class="checkboxes">
        <base-checkbox id="remember-me">Keep me logged in</base-checkbox>
      </section>
      <base-button mode="primary full-width big" class="btn">Log In</base-button>
      <p>
        Don't have an account yet?
        <base-link to="/sign-up">Sign up</base-link>
        instead
      </p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
import BaseInput from './BaseInput.vue';
import BaseCheckbox from './BaseCheckbox.vue';

export default {
  name: 'LogInForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async logIn() {
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        console.log(user);
      } catch (err) {
        console.error(err);
      }
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
