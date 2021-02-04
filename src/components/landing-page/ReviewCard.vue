<template>
  <section class="card">
    <div class="content wrapper">{{ content }}</div>
    <div class="author wrapper">
      <div class="left">
        <img class="img" :src="avatar" alt="avatar" />
        <p>{{ name }}</p>
      </div>
      <a target="_blank" href="https://twitter.com/kolaczyn">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      isRequired: true,
    },
    name: {
      type: String,
      isRequired: true,
    },
    avatar: {
      type: String,
      isRequired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
  font-weight: bold;
}
.card {
  overflow: hidden;
  border-radius: .5rem;
  width: 24rem;
}
.content {
  background-color: #fefefe;
}
.author {
  background-color: var(--clr-primary-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  align-items: center;
}
.fab {
  font-size: 1.5rem;
}
.img {
  width: 2.75rem;
  box-sizing: content-box;
  border-radius: 50%;
  margin-right: 0.75rem;
  border: white solid 3px;
}
</style>
