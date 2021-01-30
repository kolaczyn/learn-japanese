<template>
  <div class="sign-up-form">
    <h2 class="create-account">Create Account</h2>
    <form action.prevent="submitForm"></form>
    <section class="inputs">
      <base-input type="email" id="email">Your email</base-input>
      <base-input type="password" id="password">Your password</base-input>
      <base-input type="password" id="confirm">Confim password</base-input>
    </section>
    <section class="checkboxes">
      <base-checkbox id="promotion"
        >I want to recieve promotional emails</base-checkbox
      >
      <base-checkbox id="policy"
        >I agree to the
        <a href="https://google.com">
          <strong><u>Terms</u></strong> and
        </a>
        <a href="https://ddg.gg">
          <strong><u>Privacy Policy</u></strong>
        </a>
      </base-checkbox>
    </section>
    <base-button link to="/learn" mode="primary full-width big" class="btn"
      >Sign Up</base-button
    >
    <p>
      Already have an account? <strong><b>Log in</b></strong> instead
    </p>
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
.create-account {
  font-size: 3rem;
  color: var(--clr-primary);
  margin-bottom: 1.5rem;
}
.sign-up-form {
  width: 410px;
}
.btn {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
// add equal ammount of margin between all boxes
.checkboxes > *:not(:last-child){
  margin-bottom: 1rem;
}
</style>
