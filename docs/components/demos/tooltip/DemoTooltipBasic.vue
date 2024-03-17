<template>
	<div class="flex flex-wrap gap-4">
		<virgo-button>
			<tooltip text="Hello!" />
			Hover Over Me
		</virgo-button>
		<virgo-button>
			<!-- ℹ️ You can also customize `--virgo-tooltip-bg-c` CSS var for changing tooltip background -->
			<tooltip :style="{'--virgo-tooltip-bg-color': '8,60%,50%'}">
				<span class="em:text-sm text-center text-red-100">
					<i class="i-bx-shield-x me-1" />
					<span>Protection is disabled</span>
				</span>
			</tooltip>
			Scan Skipped
		</virgo-button>
	</div>
</template>
