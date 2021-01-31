<template>
  <div class="answer-input">
    <button><img src="../../assets/time.svg" alt="time" /></button>
    <input type="text" />
    <button><img src="../../assets/play.svg" alt="play" /></button>
  </div>
</template>

<script>
export default {
  name: 'AnswerInput',
};
</script>

<style lang="scss" scoped>
.answer-input {
  filter: drop-shadow(0 4px 4px rgba(black, 0.15));
}
button {
  cursor: pointer;
  flex-basis: 3rem;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.answer-input {
  display: flex;
  font-family: inherit;
}
img {
  width: 65%;
}
input {
  flex-grow: 1;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
}
</style>
