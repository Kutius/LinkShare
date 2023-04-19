<script setup lang="ts">
const { modalValue } = defineModels<{
  modalValue: string
}>()
</script>

<template>
  <input
    v-model="modalValue"
    v-bind="$attrs"
    type="text"
    b="~ transparent"
    :class="`${modalValue.length === 5 ? 'ring-blue-600' : 'ring-red-500'}`"
    h-10 w-60 rounded-md bg-gray:15 px-3 outline-none
    focus:w-full lg:w-80 focus:b focus:ring-2
    transition="~ all duration-300 ease-in-out"
  >
</template>
