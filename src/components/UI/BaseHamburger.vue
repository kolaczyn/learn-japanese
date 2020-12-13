<template>
  <button class="circle">
    <div class="burger up"></div>
    <div class="burger mid"></div>
    <div class="burger end"></div>
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
}
.circle {
  position: absolute;
  filter: drop-shadow(0 4px 4px rgba(black, .25));
  top: 2rem;
  left: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--clr-bgr-dark);
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.burger {
  width: 2rem;
  height: 4px;
  background-color: var(--clr-txt);
  border-radius: 2px;
  /* position: absolute; */
}
.mid {
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
