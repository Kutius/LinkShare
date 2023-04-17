<script setup lang="ts">
const { modalValue } = defineModels<{
  modalValue: string
}>()
</script>

<template>
  <div>
    <input
      v-model="modalValue"
      v-bind="$attrs"
      type="text"
      b="~ transparent"
      h-10 w-60 rounded-md bg-gray:15 px-3 outline-none
      focus:w-full lg:w-80 focus:b focus:ring-2 focus:ring-blue-600
      transition="~ all duration-300 ease-in-out"
    >
  </div>
</template>
