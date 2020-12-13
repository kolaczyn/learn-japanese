<template>
  <base-container>
    <header>
      <!-- I have no idea why the logo is not aligned and has a weird 'hitbox' in the dev tools -->
      <base-button link mode="logo" to="/">Moshiro</base-button>
      <nav>
        <ul>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/">Pricing</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
          <li>
            <base-button link mode="secondary" to="/log-in"
              >Log In
            </base-button>
          </li>
        </ul>
      </nav>
    </header>
  </base-container>
</template>

<style lang="scss" scoped>
header {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav {
  font-weight: medium;
  font-size: 2rem;
  ul {
    display: flex;
    align-items: center;

    li:not(:last-child) {
      margin-right: 2rem;
    }
  }
}
</style>
