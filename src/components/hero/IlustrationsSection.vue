<template>
  <div class="wrapper">
    <img class="wave-up" src="../../assets/wave.svg" alt="wave" />
    <div class="ilustrations-section">
      <base-container>
        <div class="two-columns gradually">
          <section>
            <h3><strong>Gradually</strong> learn Japanese</h3>
            <p>
              With our program, you learn a little bit every day. Our students’
              knowledge compounds over time.
            </p>
            <p>
              By spending a little time every day learning new words, you watch
              a lot of anime.
            </p>
          </section>
          <img src="../../assets/gradually.svg" alt="Person studying" />
        </div>
        <div class="two-columns never-forget">
          <section>
            <h3><strong>Never forget</strong> the vocabulary</h3>
            <p>
              Do you hate it when you forget what you’ve learned the day before?
              We too.
            </p>
            <p>
              We show you the same word many times over a long period of time.
            </p>
          </section>
          <img src="../../assets/forget.svg" alt="Thinking man" />
        </div>
      </base-container>
    </div>
    <img class="wave-down" src="../../assets/wave.svg" alt="wave" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  transform: translateY(-30rem);
  /* filter: drop-shadow(0 0 5px rgba(black, 0.15)); */
  z-index: 1000;
}
.wave-up {
  width: 100vw;
}
.wave-down {
  width: 100vw;
  transform: scaleY(-1) translateY(1rem);
}
h3 {
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
  max-width: 80%;
}
.ilustrations-section {
  transform: translateY(-1rem);
  background-color: var(--clr-bgr-light);
}
img {
  width: 40%;
  /* max-width: 170px;
  max-height: 90px;
  flex-basis: 170px; */
}
.two-columns {
  display: flex;
  align-items: center;
}
.never-forget {
  flex-direction: row-reverse;
  section {
    margin-left: 5rem;
  }
}
</style>
