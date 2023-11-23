<template>
  <div class="flex flex-wrap gap-4">
    <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2">
      <tooltip text="Hello!" />
      Hover Over Me
    </button>
    <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2">
      <!-- ℹ️ You can also customize `--a-tooltip-bg-c` CSS var for changing tooltip background -->
      <tooltip class="[&_.a-tooltip]-bg-danger">
        <span class="a-tooltip-text">
          <i class="i-bx-shield-x me-1" />
          <span>Protection is disabled</span>
        </span>
      </tooltip>
      Scan Skipped
    </button>
  </div>
</template>
