<template>
  <h1 class="title">
    Listen UA
  </h1>
  <p class="info-text">
    This page visualizes all the ukrainian music albums released in 2019 <br>
    The data is gathered by <a href="https://aristocrats.fm/">Radio Aristocrats</a> as part of their Aprize Awards<br>
    In the previous years the detailed analysis was done by <a href="https://texty.org.ua/d/2019/aprize/">Texty.org.ua</a>
  </p>

  <InfoCard title="Some numbers">
    <template v-slot:content>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </template>
  </InfoCard>

</template>

<script setup>
import InfoCard from "./InfoCard.vue";
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
