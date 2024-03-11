<script setup lang="ts">
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import MoleculeNav from '@/components/molecules/MoleculeNav.vue'
import type { Link } from '@/pkg/types/link'
import AtomButton from '@/components/atoms/AtomButton.vue'

const navLinks: Link[] = [
  {
    text: 'Markets',
    url: '/markets'
  },
  {
    text: 'Portfolio',
    url: '/portfolio'
  },
  {
    text: 'Products',
    url: '/products'
  }
]
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <AtomLogo class="header__logo" />

          <MoleculeNav :links="navLinks" />
        </div>

        <div class="header__right">
          <AtomButton class="header__button">Connect Wallet</AtomButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/organisms/organism-header';
</style>
