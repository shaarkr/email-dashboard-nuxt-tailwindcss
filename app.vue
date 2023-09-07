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
      <div class="px-10 py-7 border-b border-zinc-800">
        <!-- Sender details -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-3">
          <div class="flex items-center gap-5">
            <img
              src="https://picsum.photos/id/220/80"
              alt="User"
              class="object-cover rounded-full w-10 h-10 ring-1 ring-zinc-700/10" />
            <div>
              <p class="text-sm -mb-1">John Doe</p>
              <a href="mailto:johnathandoe@gmail.com" class="text-xs text-zinc-500"
                >johnathandoe@gmail.com</a
              >
            </div>
          </div>
          <div>
            <span class="text-xs text-zinc-500 font-medium"
              >Today 10:17 PM (3hr ago)</span
            >
          </div>
        </div>
      </div>
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
