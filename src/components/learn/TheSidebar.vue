<template>
  <!-- <teleport to='body' /> -->
  <aside class="sidebar">
    <header class="header">
      <base-exit></base-exit>
      <the-logo></the-logo>
    </header>
    <nav class="navbar">
      <ul>
        <li v-for="{ icon, to, label } in links" :key="label">
          <sidebar-item :icon="icon" :to="to" :class="{ red: label === 'Logout' }">{{
            label
          }}</sidebar-item>
        </li>
      </ul>
    </nav>
    <the-footer />
  </aside>
</template>

<script>
// import TheFooter from '../components/layout/TheFooter.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import links from '@/fixtures/sidebarLinks';
import SidebarItem from './SidebarItem.vue';

export default {
  data() {
    return {
      links,
    };
  },
  components: {
    SidebarItem,
    TheFooter,
  },
  inject: ['hideNav'],
  props: { setNav: Function },
};
</script>

<style lang="scss" scoped>
.red {
  color: var(--clr-primary-dark);
}
.overlay {
  background-color: rgba(black, 0.35);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.sidebar {
  // for now
  min-width: 26rem;
  padding: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  /* bottom: 0; */
  background: #f5e5be;
  z-index: 10;
  filter: drop-shadow(0 0px 8px rgba(black, 0.45));

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar {
  flex-grow: 1;
  margin-top: 1.2rem;
}
li:nth-child(3) {
  margin-bottom: 1.2rem;
}
</style>
