<script setup>
import { ref, reactive, onMounted } from 'vue'
import { jscodesnippets } from '@/composables/jscodesnippets'
import AppHeader from '@/components/AppHeader.vue'
import CardSnippet from '@/components/CardSnippet.vue'
import sourceData from '@/data/data.json'
</script>

<template>
  <div class="container-xl">
    <AppHeader />

    <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Quick Search</label>
      <input
        type="email"
        class="form-control form-control-lg rounded-3"
        id="exampleFormControlInput1"
        placeholder="what ever you are lookign for..."
      />
    </div>

    <main>
      <CardSnippet v-for="(item, index) in sourceData" :key="index" :snippetData="item" :codeIndex="index" />
    </main>
  </div>
</template>
