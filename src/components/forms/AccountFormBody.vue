<template>
  <div class="body">
    <base-container>
      <div class="inner-wrapper">
        <img class="img" src="../../assets/ilustrations/account.svg" alt="Register now" />
        <slot></slot>
      </div>
    </base-container>
  </div>
</template>

<script>
export default {
  name: 'AccountFormBody',
};
</script>

<style lang="scss" scoped>
.body {
  background-color: var(--clr-bgr-light);
  min-height: 100vh;
}
.inner-wrapper {
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .img {
    width: 50%;
    @media screen and (max-width: 825px) {
      display: none;
    }
  }
}
</style>
