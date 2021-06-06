<template>
  <div class="base-card">
    <header class="card-header">
      <h3>
        <slot name="header" />
      </h3>
    </header>
    <section class="card-body">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style lang="scss" scoped>
.base-card {
  filter: drop-shadow(0 4px 4px rgba(black, 0.15));
}
.card-header {
  background-color: var(--clr-bgr-dark);
  margin-bottom: 0.8rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 0.6rem 1.2rem;
}
.card-body {
  background-color: var(--clr-bgr-dark);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 1.2rem;
  line-height: 1.4;
}
</style>
