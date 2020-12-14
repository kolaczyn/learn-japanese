<template>
  <div class="base-card">
    <header>
      <h3>Hello World</h3>
    </header>
    <section>
      <p>
        これは、大人のりょうきんです<br />
        This is the adult price.<br />
        大人は三人だけです<br />
        There are only three adults.<br />
        大人たちはいざかやにいった<br />
        The adults went to an izakaya.
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  filter: drop-shadow(0 4px 4px rgba(black, .15));
}
header {
  background-color: var(--clr-bgr-dark);
  margin-bottom: 0.8rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  font-size: 1.5rem;
  padding: .6rem 1.2rem
}
section {
  background-color: var(--clr-bgr-dark);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 1.2rem
}
</style>
