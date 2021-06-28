<template>
  <base-container class="container">
    <div class="two-columns">
      <section>
        <h3><strong>Gradually</strong> learn Japanese</h3>
        <p>
          With our program, you learn a little bit every day. Our students’
          knowledge compounds over time.
        </p>
        <p>
          By spending a little time every day learning new words, you watch a
          lot of anime.
        </p>
      </section>
      <div class="img">
        <img
          src="../../assets/ilustrations/gradually.svg"
          alt="Person studying"
        />
      </div>
    </div>
    <div class="two-columns reverse">
      <section>
        <h3><strong>Never forget</strong> the vocabulary</h3>
        <p>
          Do you hate it when you forget what you’ve learned the day before? We
          too.
        </p>
        <p>We show you the same word many times over a long period of time.</p>
      </section>
      <div class="img">
        <img src="../../assets/ilustrations/forget.svg" alt="Thinking man" />
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  name: 'IlustrationsSection',
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.two-columns.reverse {
  margin-top: 5rem;
}
h3 {
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
  max-width: 80%;
}
img {
  max-width: 350px;
}
.reverse > .img {
  margin-right: 2rem;
}
.two-columns {
  display: flex;
  align-items: center;
  .img {
    flex-grow: 1;
  }
  section {
    flex-grow: 1;
  }
  @media screen and (max-width: 800px) {
    .img {
      display: none;
    }
  }
}
.reverse {
  flex-direction: row-reverse;
  /* section {
    margin-left: 5rem;
  } */
}
</style>
