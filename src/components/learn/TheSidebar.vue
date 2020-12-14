<template>
<teleport to='body' />
  <nav class="sidebar">
    <header class="sidebar-header">
      <the-logo></the-logo>
      <!-- <base-hamburger></base-hamburger> -->
      <base-exit :setNav="setNav(false)"></base-exit>
    </header>
    <!-- for now, to make sure the closing and opening works properly -->
    <!-- <button style="font-size: 2rem">Close</button> -->
    <ul>
      <li>
        <sidebar-item icon="progress.svg" to="/">Progress</sidebar-item>
      </li>
      <li>
        <sidebar-item icon="stats.svg" to="/">Stats</sidebar-item>
      </li>
      <li>
        <sidebar-item icon="my-decks.svg" to="/">My Decks</sidebar-item>
      </li>
      <li>
        <sidebar-item icon="notifications.svg" to="/"
          >Notifications</sidebar-item
        >
      </li>
      <li>
        <sidebar-item icon="profile.svg" to="/">Profile</sidebar-item>
      </li>
      <li>
        <sidebar-item icon="logout.svg" to="/">Logout</sidebar-item>
      </li>
    </ul>
  </nav>
  <teleport to="body" />
  <div class="overlay"></div>
</template>

<script>
import SidebarItem from './SidebarItem.vue';
import BaseExit from '../UI/BaseExit.vue';

export default {
  components: {
    SidebarItem,
    BaseExit,
  },
  props: { setNav: Function },
};
</script>

<style lang="scss" scoped>
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
  padding: 1.25rem;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  background: #f5e5be;
  z-index: 10;
  filter: drop-shadow(0 4px 4px rgba(black, 0.15));
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
}
li:not(:last-child) {
  margin-bottom: 1rem;
}
li:nth-child(3) {
  margin-bottom: 10rem;
}
</style>
