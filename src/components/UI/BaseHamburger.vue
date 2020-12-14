<template>
  <base-circle :onClick="onClick(true)" floating>
    <div class="line"></div>
    <div class="line mid"></div>
    <div class="line"></div>
  </base-circle>
</template>

<script>
import BaseCircle from './BaseCircle.vue';

export default {
  components: { BaseCircle },
  props: {
    onClick: Function,
  },
};
</script>

<style>
.line {
  width: 2rem;
  height: 4px;
  background-color: var(--clr-txt);
  border-radius: 2px;
  /* position: absolute; */
}
.mid {
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
