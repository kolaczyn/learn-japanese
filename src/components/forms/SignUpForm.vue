<template>
  <div class="wrapper">
    <h2 class="header">Create Account</h2>
    <form @submit.prevent="signUp">
      <section class="inputs">
        <base-input type="email" v-model="email" id="email">Your email</base-input>
        <base-input type="password" v-model="password" id="password">Your password</base-input>
        <base-input type="password" v-model="confirmPassword" id="confirm-password"
          >Confirm password</base-input
        >
      </section>
      <section class="checkboxes">
        <base-checkbox id="promotion">I want to receive promotional emails</base-checkbox>
        <base-checkbox id="policy"
          >I agree to the
          <!-- TODO make it open in new tab -->
          <base-link to="/terms">Terms</base-link>
          and
          <base-link to="/privacy-policty">Privacy Policy</base-link>
        </base-checkbox>
      </section>
      <p class="did-you-know">Did you know that in Japan they use ○ instead of ✓?</p>
      <base-button mode="primary full-width big" class="btn">Sign Up</base-button>
      <p>
        Already have an account?
        <base-link to="/log-in">Log in</base-link>
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
  name: 'SignUpForm',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async signUp() {
      try {
        // const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
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

// add equal ammount of margin between all boxes
.checkboxes > *:not(:last-child) {
  margin-bottom: 1rem;
}

.btn {
  margin-top: 0.85rem;
  margin-bottom: 1.5rem;
}

.did-you-know {
  margin-left: 1.8rem;
  color: var(--clr-txt-muted);

  @media screen and (max-width: 550px) {
    display: none;
  }
}
</style>
