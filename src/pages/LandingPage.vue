<template>
  <the-navbar/>
  <main>
    <the-hero/>
    <ilustrations-section/>
    <pros-section/>
    <start-now/>
  </main>
  <the-footer/>
</template>

<script>
import TheFooter from '@/components/hero/TheFooter.vue';
import TheNavbar from '../components/navbar/TheNavbar.vue';
import TheHero from '../components/hero/TheHero.vue';
import IlustrationsSection from '../components/hero/IlustrationsSection.vue';
import ProsSection from '../components/hero/ProsSection.vue';
import StartNow from '../components/hero/StartNow.vue';

export default {
  components: {
    TheNavbar,
    IlustrationsSection,
    TheHero,
    TheFooter,
    ProsSection,
    StartNow,
  },
};
</script>

<style></style>
