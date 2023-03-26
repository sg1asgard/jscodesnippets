<script setup>
import { ref, reactive, onMounted } from 'vue'
import { jscodesnippets } from '@/composables/jscodesnippets'
import AppHeader from '@/components/AppHeader.vue'
import CardSnippet from '@/components/CardSnippet.vue'
</script>

<template>
  <div class="container-xl">
    <AppHeader />
    <main>
      <CardSnippet
        v-for="(item, index) in jscodesnippets"
        :key="index"
        :snippetData="item"
      />
    </main>
  </div>
</template>
