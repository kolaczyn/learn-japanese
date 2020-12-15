<template>
  <footer class="footer-landing">
    <div class="footer-wrapper">
      <h4 class="footer-copy">
        &copy; {{ currentYear }} Design and Implementation by Kolaczyn
      </h4>
      <ul class="footer-icons">
        <li>
          <a href="https://github.com/kolaczyn" target="_blank"
            ><img src="../../assets/footer/github.svg" alt=""
          /></a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank"
            ><img src="../../assets/footer/twitter.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-landing {
  background-color: var(--clr-bgr-dark);
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.footer-copy {
  font-weight: normal;
  margin-bottom: 0.75rem;
  font-size: 2rem;
}
.footer-wrapper {
  text-align: center;
}
.footer-icons {
  display: flex;
  justify-content: center;
  > *:not(:first-child) {
    margin-left: 1rem;
  }
}
</style>
