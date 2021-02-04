<template>
  <the-navbar />
  <main>
    <the-hero />
    <striped-section>
      <ilustrations-section />
    </striped-section>
    <pros-section />
    <striped-section>
      <start-now />
    </striped-section>
    <reviews />
  </main>
  <the-footer />
</template>

<script>
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheHero from '@/components/landing-page/TheHero.vue';
import IlustrationsSection from '@/components/landing-page/IlustrationsSection.vue';
import ProsSection from '@/components/landing-page/ProsSection.vue';
import Reviews from '@/components/landing-page/Reviews.vue';
import StartNow from '@/components/landing-page/StartNow.vue';
import StripedSection from '@/components/layout/StripedSection.vue';

export default {
  name: 'LandingPage',
  components: {
    TheNavbar,
    IlustrationsSection,
    TheHero,
    TheFooter,
    ProsSection,
    StartNow,
    StripedSection,
    Reviews,
  },
};
</script>
