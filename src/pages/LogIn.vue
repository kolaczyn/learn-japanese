<template>
  <h1>{{currentCount}}</h1>
  <button @click="increase">Increase</button>
</template>

<script>
export default {
  computed: {
    currentCount() {
      return this.$store.getters.count;
    },
  },
  methods: {
    increase() {
      this.$store.dispatch('increment');
    },
  },

};
</script>

<style>

</style>
