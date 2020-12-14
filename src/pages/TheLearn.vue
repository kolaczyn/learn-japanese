<template>
  <div class="the-learn">
    <BaseBurger />
    <main>
      <japanese-text></japanese-text>
      <div class="grid">
        <answer-input class="answer-input"></answer-input>
        <base-card class="context"></base-card>
        <base-card class="mnemonic"></base-card>
        <base-card class="meaning"></base-card>
      </div>
    </main>
  </div>
</template>

<script>
import BaseBurger from '../components/UI/BaseHamburger.vue';
import AnswerInput from '../components/learn/AnswerInput.vue';
import JapaneseText from '../components/learn/JapaneseText.vue';

export default {
  components: { BaseBurger, AnswerInput, JapaneseText },
};
</script>

<style lang="scss" scoped>
.the-learn {
  background-color: var(--clr-bgr-light);
  position: relative;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  align-items: stretch;
  grid-gap: 1.5rem;
  grid-template-areas:
  "context answer-input meaning"
  "context mnemonic meaning"
  ;
}
.answer-input {
  grid-area: answer-input
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
