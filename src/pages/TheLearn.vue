<template>
  <div class="the-learn">
    <base-hamburger />
    <transition name="slide-in">
      <the-sidebar v-if="isNavbarOn"></the-sidebar>
    </transition>
    <transition name="fade">
      <div v-if="isNavbarOn" @click="hideNav" class="overlay"></div>
    </transition>
    <main>
      <base-container>
        <japanese-text class="japanese-text"></japanese-text>
        <div class="grid">
          <answer-input class="answer-input"></answer-input>
          <base-card class="context"></base-card>
          <base-card class="mnemonic"></base-card>
          <base-card class="meaning"></base-card>
        </div>
      </base-container>
    </main>
  </div>
</template>

<script>
import AnswerInput from '@/components/learn/AnswerInput.vue';
import JapaneseText from '@/components/learn/JapaneseText.vue';
import TheSidebar from '@/components/learn/TheSidebar.vue';

export default {
  mounted() {
    this.$store.dispatch('fetchCards');
  },
  components: {
    AnswerInput,
    JapaneseText,
    TheSidebar,
  },
  data() {
    return {
      isNavbarOn: false,
    };
  },
  provide() {
    return {
      hideNav: this.hideNav,
      showNav: this.showNav,
      isNavbarOn: this.isNavbarOn,
    };
  },
  methods: {
    hideNav() {
      this.isNavbarOn = false;
    },
    showNav() {
      this.isNavbarOn = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.japanese-text {
  margin-top: 6rem;
  margin-bottom: 3rem;
}
.the-learn {
  background-color: var(--clr-bgr-light);
  min-height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  align-items: stretch;
  grid-gap: 1.5rem;
  grid-template-areas:
    'context answer-input meaning'
    'context mnemonic meaning';
}
.answer-input {
  grid-area: answer-input;
}
.context {
  grid-area: context;
}
.mnemonic {
  grid-area: mnemonic;
}
.meaning {
  grid-area: meaning;
}
@media screen and (max-width: 800px) {
  .grid {
    padding-left: 3rem;
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
  }
}

.overlay {
  background-color: rgba(black, 0.35);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  background-color: transparent;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-out;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* I have no idea why the sliding doesnt work on exiting */
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(-100%);
}
.slide-in-enter-active,
.slide-in.leave-active {
  transition: all 200ms ease-in;
}
.slide-in-enter-to,
.slide-in-leave-from {
  transform: translateX(0);
}
</style>
