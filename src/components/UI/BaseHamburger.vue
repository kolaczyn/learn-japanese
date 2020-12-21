// showNav is hardcoded and doesn't have a general name,
// so I should probably refactor this component later

<template>
  <base-circle :onClick="showNav" class="btn" floating>
    <div class="line"></div>
    <div class="line mid"></div>
    <div class="line"></div>
  </base-circle>
</template>

<script>
import BaseCircle from './BaseCircle.vue';

export default {
  components: { BaseCircle },
  methods: {
    // onClick() {
    //   console.log('clicked');
    // },
  },
  inject: ['showNav'],
  props: {

    // onClick: Function,
  },
};
</script>

<style lang="scss" scoped>
.btn:hover,
.btn:focus {
  outline: none;
  & > .mid {
    margin-top: 9px;
    margin-bottom: 9px;
  }
}
.line {
  width: 2rem;
  height: 4px;
  background-color: var(--clr-txt);
  border-radius: 2px;
  /* position: absolute; */
}
.mid {
  transition: margin 150ms ease-in;
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
