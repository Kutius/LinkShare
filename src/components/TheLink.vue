<script setup lang="ts">
import { useToast } from 'vue-toastification'

const { href, title } = $defineProps<{
  href: string
  title: string
}>()

const { copy, copied } = useClipboard({ source: href })
const toast = useToast()

function copyAndToast(v: string) {
  copy(v)
  toast.success('Copied!')
}
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
      target="_blank"
      hover="underline text-sky-600"
      decoration="auto offset-3"
      transition="~ all duration-150 ease-in"
      flex-1 text-sky-500 underline-warmgray
    >
      {{ title }}
    </a>

    <button text-gray5 @click="copyAndToast(href)">
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
