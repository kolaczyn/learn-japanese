<template>
  <footer class="wrapper">
    <h3 class="copyright">{{ copyrightNotice }}</h3>
    <ul class="links">
      <li v-for="{href, classes, label, target} in footerLinks" :key="label">
        <a :href="href" :target="target" >
          <i :class="classes"></i>
          <p>{{ label }}</p>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import footerLinks from '@/fixtures/footerLinks';

export default {
  data() {
    return {
      footerLinks,
    };
  },
  computed: {
    copyrightNotice() {
      return `© ${new Date().getFullYear()} created by Paweł Kołaczyński`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
.copyright {
  font-weight: normal;
  margin-bottom: 0.75rem;
}
.links {
  display: flex;
  justify-content: space-around;
  > *:not(:first-child) {
    margin-left: 1.5rem;
  }
}
</style>
