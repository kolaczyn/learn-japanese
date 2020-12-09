<template>
  <a href="#" class="btn">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
$btn-md: 3rem;
$btn-bg: 4rem;
$border: 4px;
.btn {
  padding: 0.55rem 1.4rem;
  color: #fff;
  transition: all 225ms ease;
  height: $btn-md;
  border-radius: $btn-md;

  &--big {
    height: $btn-bg;
    border-radius: $btn-bg;
  }

  &--primary {
    border: $border solid var(--clr-primary);
    background-color: var(--clr-primary);
    &:hover {
      border: $border solid var(--clr-primary-dark);
      background-color: var(--clr-primary-dark);
    }
  }
  &--secondary {
    color: var(--clr-primary);
    background-color: var(--clr-bgr-dark);
    border: 4px solid var(--clr-primary);
    &:hover {
      border: $border solid var(--clr-primary-dark);
      color: #fff;
      background-color: var(--clr-primary-dark);
    }
  }
}
</style>
