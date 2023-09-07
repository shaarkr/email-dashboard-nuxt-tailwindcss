<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Message List Area -->
    <InboxMessage :class="[msgOpen && isMobileOrTablet ? 'hidden transition' : '']" />

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
              >Today&comma; 10:17 PM (3hr ago)</span
            >
          </div>
        </div>

        <!-- Message Body -->
        <h2 class="mt-10 font-medium">Interview - Plato Agency</h2>
        <div class="text-sm text-zinc-400 mt-5 space-y-3">
          <p>Hello John, we hope you are doing well!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum in
            repudiandae optio et dolores, est possimus aut error, id eligendi numquam
            voluptatum pariatur vero eius expedita quidem natus?
          </p>
        </div>
        <div class="flex items-center justify-between text-sm text-zinc-200 mt-10">
          <p>Plato Agency HR</p>
          <a href="#" class="underline underline-offset-2">platowork.com</a>
        </div>

        <!-- Fixed bottom bar -->
        <div
          class="absolute w-full bottom-0 left-0 flex items-center justify-between bg-zinc-900/50 px-7 h-12">
          <div class="flex items-center gap-5">
            <button class="text-sm flex items-center gap-2">
              <Icon name="solar:reply-bold-duotone" size="20" />
              <span>Reply</span>
            </button>
            <button class="text-sm flex items-center gap-2">
              <Icon name="solar:forward-bold-duotone" size="20" />
              <span>Forward</span>
            </button>
          </div>

          <button class="text-amber-400 flex items-center gap-2">
            <Icon name="solar:stars-bold-duotone" size="22" />
            <span class="sr-only">Favorite</span>
          </button>
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

  const { isMobileOrTablet } = useDevice();

  // state of selected message
  const msgOpen = useState("msgOpen", () => false);
</script>
