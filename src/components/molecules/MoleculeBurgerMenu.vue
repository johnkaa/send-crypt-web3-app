<script setup lang="ts">
import { ref, Ref } from 'vue'
import type { Link } from '@/pkg/types/link'
import AtomBurgerActivator from '@/components/atoms/AtomBurgerActivator.vue'
import AtomLink from '@/components/atoms/AtomLink.vue'

interface Props {
  links: Link[]
}
const props = defineProps<Props>()

let isMobileMenuOpened: Ref<boolean> = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpened.value = !isMobileMenuOpened.value
}
</script>

<template>
  <div class="burger-menu" :class="{ active: isMobileMenuOpened }">
    <AtomBurgerActivator
      :is-mobile-menu-opened="isMobileMenuOpened"
      @toggle-mobile-menu="toggleMobileMenu"
    />

    <nav class="burger-menu__navbar navbar">
      <ul class="navbar__list">
        <li v-for="link in props.links" :key="link.url" class="navbar__list-item">
          <AtomLink :link="link" class="navbar__list-link" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/molecules/molecule-burger-menu';
</style>
