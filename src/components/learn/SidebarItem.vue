<template>
  <a href="#">
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <img
          class="menu-icon"
          :src="require(`@/assets/sidebar/${icon}`)"
          alt="sidebar-icon"
        />
        <!-- I'm not sure if putting a <p> tag inside of a navbar is syntactically ok -->
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.outer-wrapper {
}
.inner-wrapper {
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  background-color: #fef5e0;
  border-radius: 0.75rem;
}
.menu-icon {
  height: 2rem;
  margin-right: 1.2rem;
}
</style>
