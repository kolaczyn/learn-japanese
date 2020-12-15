<template>
  <div class="icon-desc">
    <img class="icon" :src="require(`@/assets/${iconName}.svg`)" alt="" />
    <h4>BaseIconDesc</h4>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
      reprehenderit libero?
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
}
img {
  max-width: 4rem;
}
.icon {
  height: 6rem;
}
</style>
