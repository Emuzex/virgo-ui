<template>
  <div class="flex flex-wrap gap-4">
    <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2">
      <tooltip text="Hello!" />
      Hover Over Me
    </button>
    <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2">
      <!-- ℹ️ You can also customize `--virgo-tooltip-bg-c` CSS var for changing tooltip background -->
      <tooltip :style="{'--virgo-tooltip-bg-color': '8,60%,50%'}">
        <span class="em:text-sm text-center text-red-100">
          <i class="i-bx-shield-x me-1" />
          <span>Protection is disabled</span>
        </span>
      </tooltip>
      Scan Skipped
    </button>
  </div>
</template>
