<script setup>
import { ref } from 'vue'
import TextBadge from '@/components/shared/TextBadge.vue'

const props = defineProps({
  snippetData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card-snippet d-flex flex-column rounded-3">
    <div class="card-header p-3">
      <h2 class="fs-4">{{ snippetData.title }}</h2>
      <TextBadge v-for="tag in snippetData.tags" :key="tag">{{ tag }}</TextBadge>
    </div>
    <div class="card-code p-3">
      <code>{{ snippetData.code }}</code>
    </div>
    <div class="card-description p-3">{{ snippetData.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card-snippet {
  background-color: $gray-900;
  margin-bottom: 24px;
  &:hover {
    background-color: lighten($color: $gray-900, $amount: 1);
  }
  &:last-child {
    margin-bottom: 0;
  }
  > div {
    border-bottom: 1px solid $gray-700;
    &:last-child {
      border-bottom: none;
    }
  }
  .card-code {
    background-color: darken($color: $gray-900, $amount: 2);
  }
}
</style>
