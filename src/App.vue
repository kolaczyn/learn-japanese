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

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

  font-family: "Poppins", sans-serif;

  // variables
  --clr-bgr-dark: #f4ead2;
  --clr-bgr-light: #fef5e0;
  --clr-primary: #ff7979;
  --clr-primary-dark: #e96262;
  --clr-txt: #130f40;
  --clr-txt-muted: #6a6a6a;

  color: var(--clr-txt);
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
strong {
  color: var(--clr-primary);
  background-color: transparent;
}
</style>
