<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const theKey = $ref('')

function query() {
  console.log(theKey)
}
</script>

<template>
  <div>
    <KeySearcher
      v-model:modal-value="theKey"
      placeholder="Type to search or create..."
      autocomplete="false"
      @keydown.enter="query"
    />
    <div my-8 />
    <div
      class="bg-white dark:bg-[#1a1a1a]"
      border="~ gray/20 rounded"
      p="x-4 y-2"
      shadow
    >
      hi
    </div>
  </div>
</template>
