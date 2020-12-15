<template>
  <the-navbar></the-navbar>
  <main>
    <the-hero></the-hero>
    <ilustrations-section></ilustrations-section>
    <icons-section></icons-section>
<start-now></start-now>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '@/components/hero/TheFooter.vue';
import TheNavbar from '../components/navbar/TheNavbar.vue';
import TheHero from '../components/hero/TheHero.vue';
import IlustrationsSection from '../components/hero/IlustrationsSection.vue';
import IconsSection from '../components/hero/IconsSection.vue';
import StartNow from '../components/hero/StartNow.vue';

export default {
  components: {
    TheNavbar,
    IlustrationsSection,
    TheHero,
    TheFooter,
    IconsSection,
    StartNow,
  },
};
</script>

<style>
</style>
