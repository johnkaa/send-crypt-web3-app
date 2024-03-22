<script setup lang="ts">
import OrganismHeader from '@/components/organisms/OrganismHeader.vue'
import OrganismFooter from '@/components/organisms/OrganismFooter.vue'
import AtomIcons from '@/components/atoms/AtomIcons.vue'

import { toast } from 'vue3-toastify'

// Checking metamask in chrome extensions
</script>

<template>
  <div class="default-template">
    <OrganismHeader />
    <div class="default-template__body">
      <slot />
    </div>
    <OrganismFooter />
  </div>

  <AtomIcons />
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/templates/default-template';
</style>
