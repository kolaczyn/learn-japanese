<template>
  <base-container class="wrapper">
    <base-icon-desc v-for="{ header, body, icon } in pros" :key="header" :icon="icon">
      <template v-slot:header>{{ header }}</template>
      <template v-slot:body>{{ body }}</template>
    </base-icon-desc>
  </base-container>
</template>

<script>
import pros from '@/fixtures/prosSection';

export default {
  data() {
    return {
      pros,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  & > * {
    // grid for poor
    width: 30%;
  }

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    & > * {
      // grid for poor
      width: 35%;
      // add spacing between children of the wrapper
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
}
</style>
