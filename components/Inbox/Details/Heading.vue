<template>
  <div class="flex items-center justify-end gap-3 py-5 px-3 border-b border-zinc-800">
    <button
      v-tooltip="'Ask for help'"
      class="text-zinc-500 hover:text-zinc-100 transition">
      <Icon name="solar:question-circle-bold-duotone" size="22" />
    </button>
    <button
      v-tooltip="'View settings'"
      class="text-zinc-500 hover:text-zinc-100 transition">
      <Icon name="solar:settings-bold-duotone" size="22" />
    </button>
    <button v-tooltip="'Open menu'" class="text-zinc-500 hover:text-zinc-100 transition">
      <Icon name="solar:menu-dots-square-bold-duotone" size="22" />
    </button>
    <img
      v-tooltip="'Update profile'"
      src="https://picsum.photos/80/80"
      alt="Logged in user"
      class="rounded-full ml-3 w-6 h-6 shrink-0 object-cover ring-1 ring-zinc-800/30" />
  </div>
</template>

<script setup lang="ts"></script>
