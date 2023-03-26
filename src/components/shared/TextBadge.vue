<template>
  <span class="text-badge p-2 rounded-2"><slot></slot></span>
</template>

<style lang="scss" scoped>
$color: $primary;
.text-badge {
  background-color: $color;
  cursor: pointer;
  &:hover {
    background-color: lighten($color: $color, $amount: 5);
  }
}
</style>
