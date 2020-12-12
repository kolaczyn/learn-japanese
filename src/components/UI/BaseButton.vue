<template>
  <button class="btn" :class="mode" v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else class="btn" :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
$btn-md: 3rem;
$btn-bg: 4rem;
$border: 4px;
.btn {
  padding: 0.55rem 1.4rem;
  color: #fff;
  transition: all 225ms ease-in;
  height: $btn-md;
  border-radius: $btn-md;
}
.big {
  height: $btn-bg;
  border-radius: $btn-bg;
}

.primary {
  border: $border solid var(--clr-primary);
  background-color: var(--clr-primary);
  &:hover {
    border: $border solid var(--clr-primary-dark);
    background-color: var(--clr-primary-dark);
  }
}
.secondary {
  color: var(--clr-primary);
  background-color: var(--clr-bgr);
  border: 4px solid var(--clr-primary);
  &:hover {
    border: $border solid var(--clr-primary);
    color: #fff;
    background-color: var(--clr-primary);
  }
}
.logo {
  color: var(--clr-primary-dark);
  font-weight: bold;
  font-size: 3rem;
  transition: color 225ms ease;
  &:hover {
    color: var(--clr-primary);
  }
}
</style>
