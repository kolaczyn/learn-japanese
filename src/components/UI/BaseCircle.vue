<template>
  <button @click="onClick" class="circle" :class="{ floating: floating }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    floating: {
      type: Boolean,
      required: false,
      default: false,
    },
    onClick: Function,
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
}
.circle {
  filter: drop-shadow(0 4px 4px rgba(black, 0.25));
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: var(--clr-bgr-dark);
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.floating {
  position: absolute;
  top: 2rem;
  left: 2rem;
}
</style>
