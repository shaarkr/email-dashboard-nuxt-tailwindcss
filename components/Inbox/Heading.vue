<template>
  <div class="md:p-7 p-5 border-b border-zinc-800">
    <button
      v-tooltip="'Back'"
      class="text-zinc-400 mb-5 hover:text-primary p-1 transition rounded-lg hover:bg-primary-400/20">
      <Icon name="solar:double-alt-arrow-left-bold-duotone" />
    </button>

    <div class="flex items-center gap-10">
      <h1 class="text-2xl font-bold">Inbox</h1>
      <button
        v-tooltip="'Filter Inbox'"
        class="inline-flex items-center justify-center rounded-lg p-1 text-zinc-400 bg-zinc-800/50 hover:text-primary-100 hover:bg-primary-500 transition">
        <Icon name="solar:filter-bold-duotone" size="18" />
      </button>
    </div>

    <div class="flex items-center gap-5 mt-5">
      <div class="relative">
        <span class="absolute left-3 top-[47%] -translate-y-1/2 text-zinc-500">
          <Icon name="solar:magnifer-linear" size="16" />
        </span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          class="bg-zinc-900 md:min-w-[300px] w-[280px] rounded-md border border-zinc-800 text-sm px-3 py-2 pl-9 focus:outline-none focus:border-primary transition" />
      </div>
      <button
        v-tooltip="'Create new email'"
        class="inline-flex shrink-0 items-center justify-center p-2 rounded-lg bg-zinc-200 text-zinc-900 hover:bg-primary hover:text-primary-50 transition">
        <span class="sr-only">Click to create new email</span>
        <Icon name="solar:pen-new-square-linear" size="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
