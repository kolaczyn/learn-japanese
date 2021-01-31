<template>
  <div class="stripe">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'StripedSection',
};
</script>

<style lang="scss" scoped>
.stripe {
  background-color: var(--clr-bgr-light);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
}
</style>
