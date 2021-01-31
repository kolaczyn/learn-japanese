<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: .5rem 1.5rem;
}
</style>
