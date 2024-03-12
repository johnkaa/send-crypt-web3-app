<script setup lang="ts">
interface Props {
  isMobileMenuOpened: boolean
}
const props = defineProps<Props>()

const emit = defineEmits(['toggle-mobile-menu'])
</script>

<template>
  <div
    class="burger-activator"
    :class="{ active: props.isMobileMenuOpened }"
    @click="emit('toggle-mobile-menu')"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/atoms/atom-burger-activator';
</style>
