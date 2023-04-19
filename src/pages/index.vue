<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

interface TheLink {
  href: string
  title: string
}

const api = 'https://tkk39wqfcw.hk.aircode.run/server'

let theKey = $ref('')

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

const { data, isFetching, execute } = useFetch(api, {
  immediate: false,
}).post(params).json<{
  data: TheLink[]
}>()

function query() {
  if (theKey && theKey.length === 5) {
    execute()
    urlParams.key = theKey
  }
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

    <section
      class="bg-white dark:bg-[#1a1a1a]"
      border="~ gray/20 rounded"
      p="x-4 y-4 lg:x-8 lg:y-8"
      flex="~ col"
      gap3 shadow lg:gap5
    >
      <template v-for="{ href, title } in data?.data" :key="href">
        <TheLink :href="href" :title="title" />
      </template>
    </section>
  </div>
</template>
