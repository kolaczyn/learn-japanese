<template>
  <div class="base-checkbox">
    <div :class="stylesClasses" class="fancy-checkbox"></div>
    <input v-model="isChecked" type="checkbox" :id="id" />
    <label :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    // isChecked: {
    //   type: Boolean,
    //   required: false,
    //   default: false,
    // },
  },
  computed: {
    stylesClasses() {
      return { active: this.isChecked };
    },
  },
};
</script>

<style lang="scss" scoped>
.base-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
input {
  display: none;
}
.fancy-checkbox {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 4px;
  background-color: white;
  display: inline-block;
  margin-right: 0.5rem;
  transition: background 150ms ease-in;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 0.1rem;
    background: white;
  }

  &::before {
    height: .6rem;
    transform: translate(0.8rem, .3rem) rotate(45deg);
  }
  &::after {
    height: .6rem;
    transform: translate(.35rem, .3rem) rotate(-45deg);
  }

  &.active {
    background-color: var(--clr-primary);
  }
}
</style>
