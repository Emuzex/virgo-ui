<template>
  <div class="grid-row sm:grid-cols-2 place-items-stretch">
    <!-- 👉 rounded-0 -->
    <virgo-input
      input-wrapper-classes="rounded-0"
      placeholder="rounded-0"
    />

    <!-- 👉 rounded -->
    <virgo-input
      input-wrapper-classes="rounded"
      placeholder="rounded"
    />

    <!-- 👉 default -->
    <virgo-input placeholder="default" />

    <!-- 👉 rounded-xl -->
    <virgo-input
      input-wrapper-classes="rounded-xl"
      placeholder="rounded-xl"
    />

    <!-- 👉 rounded-2xl -->
    <virgo-input
      input-wrapper-classes="rounded-2xl"
      placeholder="rounded-2xl"
    />
  </div>
</template>
