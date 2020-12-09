<template>
  <div class="icon-desc">
    <img :src="iconPath" alt="" />
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
.icon-desc{
  text-align: center;
  width: 30%;
}
img {
  max-width: 4rem;
}
</style>
