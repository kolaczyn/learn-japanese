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
        <p class="menu-name">
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
    color: String,
  },
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.outer-wrapper {
  display: flex;
  height: 4rem;

  &:hover >  .inner-wrapper {
  background-color: #fef5e0;

  }
}
.inner-wrapper {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 0.75rem;
  padding: .9rem .9rem;

  transition: background-color 125ms ease-in;
}
.menu-name {
  margin-right: 1.2rem;
  margin-left: 1.2rem;
}
.menu-icon {
  height: 2.25rem;
}
</style>
