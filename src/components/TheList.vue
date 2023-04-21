<script setup lang="ts">
import type { ILink } from '~/composables/link'

const { data } = defineProps<{
  data: ILink[]
}>()
</script>

<template>
  <section
    class="bg-white dark:bg-[#1a1a1a]"
    border="~ gray/20 rounded"
    p="x-4 y-4 lg:x-8 lg:y-8"
    flex="~ col"
    gap3 shadow lg:gap5
  >
    <template v-for="{ href, title } in data" :key="href">
      <TheLink :href="href" :title="title" />
    </template>
  </section>
</template>
