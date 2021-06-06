<template>
  <router-link :to="to">
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <span class="material-icons">
          {{ icon }}
        </span>
        <section class="menu-name">
          <slot></slot>
        </section>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    icon: String,
    color: String,
    to: String,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.outer-wrapper {
  display: flex;
  height: 3.5rem;

  &:hover > .inner-wrapper {
    background-color: #fef5e0;
  }
}
.inner-wrapper {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 0.75rem;
  padding: 0.5rem;

  transition: background-color 125ms ease-in;
}
.menu-name {
  margin-right: 1.2rem;
  margin-left: 1.2rem;
}

</style>
