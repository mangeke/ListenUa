<template>
  <div class="grid gap-y-3">
    <h1 class="title">{{ $t('Listen UA') }}</h1>
    <p class="info-text">
      This page visualizes all the ukrainian music albums released in 2019
      <br />The data is gathered by
      <a href="https://aristocrats.fm/">Radio Aristocrats</a> as part of their Aprize Awards
      <br />In the previous years the detailed analysis was done by
      <a href="https://texty.org.ua/d/2019/aprize/">Texty.org.ua</a>
    </p>

    <InfoCard title="Some numbers" class="mt-5">
      <template v-slot:content>
        <div class="grid grid-cols-1 md:grid-cols-4 place-items-center">
          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">albums</label>
          </div>

          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">EPs</label>
          </div>

          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">artists</label>
          </div>

          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">genres</label>
          </div>
        </div>
      </template>
    </InfoCard>
  </div>
</template>

<script setup>
import InfoCard from "./InfoCard.vue";
import CircleIndicator from "./CircleIndicator.vue";
</script>

<style scoped>
.title {
  color: black;
  font-size: 4em;
  font-family: monospace;
}
.info-text {
  color: black;
  font-size: 1.5em;

  font-family: monospace;
}
</style>
