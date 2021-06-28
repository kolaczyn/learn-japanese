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
  name: 'BaseCheckbox',
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
    transition: background 150ms ease-in;
    position: absolute;
    content: "";
    display: inline-block;
    background: white;
    border-radius: 50%;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  // outer circle
  &::before {
    height: 0.85rem;
    width: 0.85rem;
  }

// inner circle
  &::after {
    height: 0.55rem;
    width: 0.55rem;
    background-color: white;
  }

  &.active {
    &::before {
      background-color: var(--clr-primary);
    }
    /* background-color: var(--clr-primary); */
  }
}
</style>
