<template>
  <!-- in the future try making it from two divs -->
  <base-circle :onClick="hideNav" class="times"> &times; </base-circle>
</template>

<script>
import BaseCircle from './BaseCircle.vue';

export default {
  components: { BaseCircle },
  props: { onClick: Function },
  inject: ['hideNav'],
};
</script>

<style>
.times {
  font-size: 4rem;
}
/* .line {
  width: 2rem;
  height: 4px;
  background-color: var(--clr-txt);
  border-radius: 2px;
}
.left {
  transform: rotate(45deg);
  transform-origin: center;
}
.right {
  transform: rotate(-45deg);
} */
</style>
