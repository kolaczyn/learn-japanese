<template>
  <account-form-body>
    <log-in-form />
  </account-form-body>
</template>

<script>
import LogInForm from '@/components/forms/LogInForm.vue';
import AccountFormBody from '@/components/forms/AccountFormBody.vue';

export default {
  name: 'LogIn',
  components: { LogInForm, AccountFormBody },
};
</script>
