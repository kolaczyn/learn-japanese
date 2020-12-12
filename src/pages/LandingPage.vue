<template>
  <main>
    <the-hero></the-hero>
    <ilustrations-section></ilustrations-section>
    <icons-section></icons-section>
  </main>
</template>

<script>
import TheHero from '../components/hero/TheHero.vue';
import IlustrationsSection from '../components/hero/IlustrationsSection.vue';
import IconsSection from '../components/hero/IconsSection.vue';

export default {
  components: {
    IlustrationsSection, TheHero, IconsSection,
  },

};
</script>

<style>

</style>
