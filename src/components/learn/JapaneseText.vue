<template>
  <section class="japanese-text">
    <h4>おとな</h4>
    <h2>大人</h2>
  </section>
</template>

<script>
export default {
  name: 'JapaneseText',
};
</script>

<style lang="scss" scoped>
.japanese-text {
  text-align: center;
}
h2, h4 {
  font-weight: normal;
}
h2 {
  font-size: 6rem;
}
h4 {
  font-size: 3rem;
  // change it for the variable in the future
  color: rgba(#130f40, 0.6);
}
</style>
