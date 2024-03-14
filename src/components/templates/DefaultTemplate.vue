<script setup lang="ts">
import OrganismHeader from '@/components/organisms/OrganismHeader.vue'
import OrganismFooter from '@/components/organisms/OrganismFooter.vue'
import AtomIcons from '@/components/atoms/AtomIcons.vue'

import { toast } from 'vue3-toastify'

// Checking metamask in chrome extensions
if (typeof window.ethereum === 'undefined') {
  toast.error(
    'MetaMask is not installed! Please install it to your extensions for connect your wallet.'
  )
}
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
