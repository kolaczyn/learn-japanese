<template>
  <the-navbar></the-navbar>
  <main>
    <the-hero></the-hero>
    <ilustrations-section></ilustrations-section>
    <icons-section></icons-section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from './components/navbar/TheNavbar.vue';
import TheHero from './components/hero/TheHero.vue';
import IlustrationsSection from './components/IlustrationsSection.vue';
import IconsSection from './components/IconsSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    IlustrationsSection, TheNavbar, TheHero, IconsSection,
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
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

  font-family: "Poppins", sans-serif;

  // variables
  --clr-bgr-dark: #f4ead2;
  --clr-bgr-light: #fef5e0;
  --clr-primary: #ff7979;
  --clr-primary-dark: #e96262;
  --clr-txt: #130f40;

  background-color: var(--clr-bgr-dark);
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
