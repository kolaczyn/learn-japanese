<template>
  <div class="icon-desc">
    <img class="icon" :src="require(`@/assets/${iconName}.svg`)" alt="" />
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
  props: ['icon-name'],
  computed: {
    iconPath() {
      return `../assets/${this.iconName}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-desc {
  text-align: center;
  width: 18rem;
}
.icon-header {
  font-size: 2rem;
}
.icon-paragraph {
  font-size: 1.5rem;
}
img {
  max-width: 4rem;
}
.icon {
  height: 6rem;
}
</style>
