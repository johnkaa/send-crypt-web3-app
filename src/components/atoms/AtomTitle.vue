<script lang="ts" setup>
interface Props {
  tag: string
}

const props = defineProps<Props>()
</script>

<template>
  <component class="title" :is="props.tag">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/atoms/atom-title';
</style>
