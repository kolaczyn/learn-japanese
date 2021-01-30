<template>
  <div class="the-hero">
    <base-container>
      <div class="hero-wrapper">
        <section class="intro">
          <h1>Improve your <strong>Japanese</strong></h1>
          <p>
            Gradually increase your knowledge of the Japanese vocabulary with
            <strong>Moshiro</strong>.
          </p>
          <div class="btns-wrapper">
            <base-button class="sign-up" link mode="primary" to="/sign-up"
              >Sign Up</base-button
            >
            <base-button link mode="secondary" to="/">Learn More</base-button>
          </div>
        </section>
        <img
          src="../../assets/ilustrations/hero.svg"
          alt="Person looking at a giant phone"
          class="hero-img"
        />
      </div>
    </base-container>
  </div>
</template>

<style lang="scss" scoped>
.the-hero {
  background-color: var(--clr-bgr-dark);
}
.intro {
  z-index: 10;
}
.hero-wrapper {
  margin-top: 2rem;
  position: relative;
  min-height: 75vh;
}
.hero-img {
  height: 600px;
  transform: scaleX(-1);
  position: absolute;
  right: 0;
  bottom: 0;
  /* z-index: 1; */
}
h1 {
  font-weight: bold;
  font-size: 4rem;
  margin-bottom: 0;
}
p {
  line-height: 1.3;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  width: 635px;
  display: inline-block;
}
.btns-wrapper {
  font-size: 2rem;
}
.sign-up {
  margin-right: 1.5rem;
}
</style>
