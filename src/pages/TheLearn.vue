<template>
  <div class="the-learn">
    <BaseBurger />
    <main>
      <japanese-text></japanese-text>
      <answer-input></answer-input>
      <base-card></base-card>
      <base-card></base-card>
      <base-card></base-card>
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
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 2rem auto; */
}
</style>
