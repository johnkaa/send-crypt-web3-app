<script setup lang="ts">
import AtomTitle from '@/components/atoms/AtomTitle.vue'

interface Props {
  icon: string
  title: string
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="about-card">
    <svg class="about-card__icon">
      <use :href="props.icon"></use>
    </svg>
    <AtomTitle class="about-card__title" tag="h3">{{ props.title }}</AtomTitle>
    <p class="about-card__text">{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/molecules/molecule-about-card';
</style>
