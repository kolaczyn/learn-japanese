<template>
  <div class="icon-desc">
    <span class="material-icons">
      {{ icon }}
    </span>
    <h4 class="icon-header">
      <slot name="header"></slot>
    </h4>
    <p class="icon-paragraph">
      <slot name="body"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseIconDesc',
  props: ['icon'],
};
</script>

<style lang="scss" scoped>
.icon-desc {
  text-align: center;
}
.material-icons {
  font-size: 4rem;
}
.icon-header {
  font-size: 2rem;
}
.icon-paragraph {
  font-size: 1.5rem;
}
@media screen and (max-width: 1000px) {
  .material-icons {
    font-size: 4rem;
  }
  .icon-header {
    font-size: 1.2rem;
  }
  .icon-paragraph {
    font-size: 1rem;
  }
}
</style>
