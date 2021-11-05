<template>
  <div class="info-card grid gap-y-6">
      <h1 class="title mb-5 mt-3">{{title}}</h1>

      <div class="content">
          <slot name="content"></slot>
      </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String
})

</script>

<style scoped>
.title {
    font-size: 2.5em;
}
.info-card {
    width: 100%;
    background-color: #2a2a2a;
    color: white;
    font-family: monospace;
    padding: 8px 12px 10px 12px;
    box-sizing: border-box;
}
.content {
    padding: 0px 12px 12px 12px;
}
</style>
