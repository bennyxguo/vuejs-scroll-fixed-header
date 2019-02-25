<template>
  <div :class="{'scroll-fixed-header': true, 'is-fixed': fixed}">
    <slot></slot>
  </div>
</template>

<style scoped>
  .scroll-fixed-header.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
    width: 100%;
  }
</style>
