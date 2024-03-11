<script setup lang="ts">
import type { Link } from '@/pkg/types/link'
interface Props {
  link: Link
}

const props = defineProps<Props>()
</script>

<template>
  <router-link :to="props.link.url">
    {{ props.link.text }}
  </router-link>
</template>
