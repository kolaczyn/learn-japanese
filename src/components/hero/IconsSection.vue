<template>
  <div class="icons-section">
    <base-container class="container">
      <base-icon-desc icon-name="free">
        <template v-slot:header> Start for free </template>
        <template v-slot:body
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, odio?</template
        >
      </base-icon-desc>
      <base-icon-desc icon-name="time">
        <template v-slot:header>You won't forget it</template>
        <template v-slot:body
          >Lorem ipsum dolor sit amet elit.
          Quia consectetur dolores maxime.</template
        >
      </base-icon-desc>
      <base-icon-desc icon-name="brain">
        <template v-slot:header>Easy on your time</template>
        <template v-slot:body
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</template
        >
      </base-icon-desc>
    </base-container>
  </div>
</template>

<style lang="scss" scoped>
.icons-section {
  transform: translateY(-50rem);
  background-color: var(--clr-bgr-dark);
}
.container {
  display: flex;
  justify-content: space-around;
}
</style>
