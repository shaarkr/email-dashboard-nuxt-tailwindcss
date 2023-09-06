<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Message List Area -->
    <InboxMessage />

    <!-- Message Details -->
    <div
      v-if="msgOpen"
      class="h-screen relative md:w-full w-screen transition border-l border-zinc-800">
      <!-- Heading of Details -->
      <InboxDetailsHeading />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "bg-zinc-950 text-zinc-50 min-h-screen",
    },
  });

  // state of selected message
  const msgOpen = useState("msgOpen", () => false);
</script>
