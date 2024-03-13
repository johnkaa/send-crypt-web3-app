<script lang="ts" setup>
interface Props {
  disabled?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <button class="button" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/atoms/atom-button';
</style>
