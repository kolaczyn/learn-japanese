<template>
<!-- <teleport to='body' /> -->
  <nav class="sidebar">
    <header class="sidebar-header">
      <base-exit></base-exit>
      <the-logo></the-logo>
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
</template>

<script>
import SidebarItem from './SidebarItem.vue';
import BaseExit from '../UI/BaseExit.vue';

export default {
  components: {
    SidebarItem,
    BaseExit,
  },
  inject: ['hideNav'],
  // props: { setNav: Function },
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
  padding: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  background: #f5e5be;
  z-index: 10;
  filter: drop-shadow(0 0px 8px rgba(black, 0.45));
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li:not(:last-child) {
  /* margin-bottom: 1rem; */
}
// hardcoded for now, use flex to lay it out properly
li:nth-child(1) {
  margin-top: 8rem;
}
li:nth-child(3) {
  margin-bottom: 8rem;
}
</style>
