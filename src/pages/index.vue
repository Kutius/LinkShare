<script setup lang="ts">
import type { ILink } from '~/composables/link'

defineOptions({
  name: 'IndexPage',
})

const api = 'https://tkk39wqfcw.hk.aircode.run'

let theKey = $ref('')

let creationKey = $ref<string | null>(null)

const { links, setLinks, addLink, clearLinks } = useLinks()

const params = computed(() => ({
  query: theKey,
}))

const urlParams = useUrlSearchParams('history')

onMounted(() => {
  if (typeof urlParams.key === 'string') {
    theKey = urlParams.key
    query()
  }
})

const { data, execute: fetchData, onFetchResponse } = useFetch(`${api}/server`, {
  immediate: false,
}).post(params).json<{
  data: ILink[]
}>()

onFetchResponse((res) => {
  if (res.ok && data.value !== null)
    setLinks(data.value.data)
})

const { execute: createShare } = useFetch(`${api}/create`, {
  immediate: false,
}).post(links)

function query() {
  if (theKey && theKey.length === 5) {
    fetchData()
    urlParams.key = theKey
    creationKey = null
  }
}

function create() {
  theKey = ''
  creationKey = myNanoid(5)
  clearLinks()
}

async function insertLinkByCreating() {
  if (creationKey) {
    const copied = await navigator.clipboard.readText()

    if (links.value.some(l => l.href === copied))
      return

    const title = parsedLinkTitle(copied)

    if (title) {
      addLink({
        title,
        href: copied,
      })
      createShare()
    }
  }
}
</script>

<template>
  <div>
    <div flex justify-between gap10>
      <KeySearcher
        v-model:modal-value="theKey"
        placeholder="Type to search or create..."
        aria-autocomplete="list"
        autocomplete="false"
        @keydown.enter="query"
      />

      <button
        inline-flex items-center gap-1 btn
        @click="create"
      >
        <div i-carbon:task-add />
        <span>Create</span>
      </button>
    </div>

    <div my-8 />

    <div
      v-if="creationKey"
      my-4 h-10 w-full flex rounded-md bg-gray:25 lh-10
    >
      <span
        flex-1 cursor-pointer rounded op50 hover:bg-gray:30
        transition="~ all duration-300 ease-in-out"
        @click="insertLinkByCreating"
      >
        Please copy the link and click me to add it.
      </span>
      <span rounded px-4 text-blue-600 dark:text-blue-300 hover="op70">
        {{ creationKey }}
      </span>
    </div>

    <TheList :data="links" />
  </div>
</template>
