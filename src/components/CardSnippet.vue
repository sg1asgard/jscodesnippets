<script setup>
import { ref } from 'vue'
import TextBadge from '@/components/shared/TextBadge.vue'

const props = defineProps({
  snippetData: {
    type: Object,
    required: true
  },
  codeIndex: {
    type: Number,
    required: false
  }
})
</script>

<template>
  <div class="card-snippet d-flex flex-column rounded-3">
    <div class="card-header p-3">
      <div class="d-flex flex-row">
        <h2 class="fs-4 flex-fill text-capitalize">
          <span class="me-2">{{ codeIndex }}.</span> {{ snippetData.title }}
        </h2>
        <div v-if="snippetData?.tags">
          <TextBadge v-for="tag in snippetData.tags" :key="tag">{{ tag }}</TextBadge>
        </div>
      </div>
    </div>
    <div class="card-code pt-3">
      <highlightjs autodetect :code="snippetData.code" />
    </div>
    <div v-if="snippetData?.description" class="card-description p-3 text-gray-300">
      {{ snippetData.description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-snippet {
  background-color: $gray-900;
  margin-bottom: 24px;
  overflow: hidden;
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
    background-color: #22272e;
  }
}
</style>
