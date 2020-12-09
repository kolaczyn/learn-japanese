<template>
<base-container>
  <header>
    <a href="/" class="logo">Moshiro</a>
    <nav>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><base-button class="btn--primary btn--big">Sign Up</base-button></li>
      </ul>
    </nav>
  </header>
</base-container>
</template>

<style lang="scss" scoped>
header {
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  color: var(--clr-primary-dark);
  font-weight: bold;
  font-size: 3rem;
  transition: color 225ms ease;
    &:hover{
      color: var(--clr-primary);
    }
}
nav {
  font-weight: medium;
  font-size: 2rem;
  ul {
    display: flex;

    li:not(:last-child)
    {
      margin-right: 2rem;
    }
  }
}
</style>
