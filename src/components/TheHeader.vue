<template>
  <header mb-4 flex>
    <span flex-1 text-start font-serif text-3xl op50>
      LinkShare
    </span>

    <nav inline-flex items-center gap-2 text-xl>
      <div i-carbon-logo-github icon-btn />

      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>
    </nav>
  </header>
</template>
