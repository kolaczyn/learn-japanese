<template>
  <router-link class="shit" :to="to">
    <strong>
      <u>
        <slot></slot>
      </u>
    </strong>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.shit {
  color: palegreen;
}
</style>
