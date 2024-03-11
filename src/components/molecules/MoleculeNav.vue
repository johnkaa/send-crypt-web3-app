<script setup lang="ts">
import AtomLink from '@/components/atoms/AtomLink.vue'
import type { Link } from '@/pkg/types/link'
interface Props {
  links: Link[]
}

const props = defineProps<Props>()
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li v-for="link in props.links" :key="link.url" class="navbar__list-item">
        <AtomLink :link="link" class="navbar__list-link" />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/molecules/molecule-nav';
</style>
