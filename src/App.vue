<template>
  <router-view> </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Moshiro';
      },
    },
  },
});
</script>
