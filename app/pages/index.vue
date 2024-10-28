<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { useCounterStore } from '~/stores/counter'
import { getPostList } from '~/service/foo'

const counterStore = useCounterStore()
const { data, error } = await getPostList()
console.log(data.value, error)
</script>

<template>
  <div class="flex justify-center h-screen w-full">
    <div class="text-center space-y-3 font-bold">
      <h1 class="text-3xl text-green-400">Nuxt4-base</h1>
      <div>
        <p class="text-base text-gray-500">Content goes here</p>
      </div>
      <div>
        <p class="text-base text-gray-500">Counter: {{ counterStore.count }}</p>
      </div>
      <Button @click="counterStore.increment">Counter ++</Button>
      <div v-if="!(data == null)">
        <div v-for="item in data.items" :key="item.metadata.name">
          <p>{{ item.spec.title }}</p>
        </div>
      </div>
      <div v-else>
        <p>加载中...</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
