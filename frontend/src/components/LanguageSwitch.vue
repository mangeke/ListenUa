<template>
  <div>
      <span  v-for="(language, index) in languages"
      :key="language" 
      class="text-3xl cursor-pointer font-mono"
      :class="{ 'text-gray-400': language !== modelValue }"
      @click="$emit('update:modelValue', language)">
      {{language}} {{index < languages.length - 1 ? "/" : ""}}
      </span>
  </div>
</template>


<script setup>

const props = defineProps({
  languages: Array,
  modelValue: String
})

</script>

