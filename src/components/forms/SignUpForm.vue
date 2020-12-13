<template>
  <div class="sign-up-form">
    <form action.prevent="submitForm"></form>
    <base-input type="email" id="email">Your email</base-input>
    <base-input type="password" id="password">Your password</base-input>
    <base-input type="password" id="confirm">Confim password</base-input>
    <base-checkbox id="promotion"
      >I want to recieve promotional emails</base-checkbox
    >
    <!-- in the future make the Terms and services a link -->
    <base-checkbox id="policy"
      >I agree to the
      <a href="https://google.com">
        <strong><u>Terms</u></strong> and
      </a>
      <a href="https://ddg.gg">
        <strong><u>Privacy Policy</u></strong>
      </a>
    </base-checkbox>
    <base-button link to="/learn" mode="primary full-width big">Sign Up</base-button>
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
.sign-up-form {
  width: 410px;
}
</style>
