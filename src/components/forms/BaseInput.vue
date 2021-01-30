<template>
  <div class="base-input">
    <label :for="id">
      <slot></slot>
    </label>
    <div class="input-wrapper">
      <input class="input" :type="type" :id="id" />
      <div class="input-shadow"></div>
    </div>
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

.input-wrapper {
  margin-top: 0.75rem;
  margin-bottom: 1.75rem;
  width: 100%;
  border-radius: 12px;
}

.input {
  border-radius: 12px;
  z-index: 10;
  color: inherit;
  width: 100%;
  /* height: 3rem; */
  padding: 1rem 0.8rem;
  font-size: 1.2rem;
  border: 1px solid #f4ead2;

  outline: none;
  position: relative;
}
.input-shadow {
  border-radius: 12px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  opacity: 0;
  transition: opacity 200ms ease-in;
  filter: drop-shadow(0 0 .8rem var(--clr-primary));
}
.input-wrapper {
  position: relative;
}
.input:focus + .input-shadow {
  opacity: 1;
}
</style>
