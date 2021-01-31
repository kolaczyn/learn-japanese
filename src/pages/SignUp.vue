<template>
  <account-form-body>
    <sign-up-form />
  </account-form-body>
</template>

<script>
import AccountFormBody from '@/components/forms/AccountFormBody.vue';
import SignUpForm from '@/components/forms/SignUpForm.vue';

export default {
  components: { AccountFormBody, SignUpForm },
};
</script>
