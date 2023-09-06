<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Message List Area -->
    <InboxMessage />
  </div>
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "bg-zinc-950 text-zinc-50 min-h-screen",
    },
  });
</script>
