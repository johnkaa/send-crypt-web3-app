<script setup lang="ts">
import type { InfoField } from '@/pkg/types/info-field'

interface Props {
  infoField: InfoField
}

const props = defineProps<Props>()
</script>

<template>
  <div class="info-field">
    <span class="info-field__title">{{ props.infoField.title }}: </span>
    <span class="info-field__value">{{ props.infoField.value }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/atoms/atom-info-field';
</style>
