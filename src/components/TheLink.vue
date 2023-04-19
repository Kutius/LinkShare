<script setup lang="ts">
const { href, title } = $defineProps<{
  href: string
  title: string
}>()

const { copy, copied } = useClipboard({ source: href })
</script>

<template>
  <div
    text="start lg lg:2xl"
    h-10 w-full flex rounded bg-gray:15 px-4 lh-10 lg:h-15 lg:lh-15
    hover="ring ring-blue5/70 shadow shadow-blue3/40"
    transition="~ all duration-300 ease-in-out"
  >
    <a
      :href="href"
      flex-1 underline-warmgray
      hover="underline text-white"
      decoration="auto offset-3"
      transition="~ all duration-150 ease-in"
    >
      {{ title }}
    </a>

    <button text-gray5 @click="copy(href)">
      <Transition name="fade">
        <div v-if="!copied" i-carbon-copy-link h-full icon-btn />
        <div v-else i-carbon:checkmark-filled h-full icon-btn />
      </Transition>
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
