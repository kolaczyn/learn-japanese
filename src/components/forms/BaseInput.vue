<template>
  <div class="base-input">
    <label :for="id">
      <slot></slot>
    </label>
    <input :type="type" :id="id" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  color: var(--clr-txt-muted);
  font-size: 1.2rem;
}
input {
  color: inherit;
  width: 100%;
  /* height: 3rem; */
  padding: 1rem 0.8rem;
  border-radius: 12px;
  font-size: 1.2rem;
  border: 1px solid #f4ead2;

  margin-top: .75rem;
  margin-bottom: 1.75rem;
}
</style>
