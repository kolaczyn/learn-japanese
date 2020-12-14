<template>
  <div class="the-learn">
    <BaseBurger :onClick="dummy" />
    <the-sidebar :setNav="setNav" v-if="isNavbarOn"></the-sidebar>
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
import BaseBurger from '../components/UI/BaseHamburger.vue';
import AnswerInput from '../components/learn/AnswerInput.vue';
import JapaneseText from '../components/learn/JapaneseText.vue';
import TheSidebar from '../components/learn/TheSidebar.vue';

export default {
  components: {
    BaseBurger,
    AnswerInput,
    JapaneseText,
    TheSidebar,
  },
  data() {
    return {
      isNavbarOn: true,
    };
  },
  // provide() {
  //   return {
  //     changeNavbarVisibility: this.changeNavbarVisibility,
  //   };
  // },
  methods: {
    setNav(val) {
      console.log('fuck');
      this.isNavbarOn = val;
    },
    dummy() {
      console.log('dummy');
    },
  },
};
</script>

<style lang="scss" scoped>
.japanese-text {
  margin-top: 6rem;
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
    "context answer-input meaning"
    "context mnemonic meaning";
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
</style>
