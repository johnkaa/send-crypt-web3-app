<script setup lang="ts">
import type { Link } from '@/pkg/types/link'
import { useProfile } from '@/store/profile'
import { formatAddress } from '@/pkg/plugins/address-formatter'
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import MoleculeNav from '@/components/molecules/MoleculeNav.vue'
import AtomButton from '@/components/atoms/AtomButton.vue'
import MoleculeBurgerMenu from '@/components/molecules/MoleculeBurgerMenu.vue'
import { computed, onMounted } from 'vue'

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

const profile = useProfile()

const buttonText = computed(() => {
  return profile.address ? formatAddress(profile.address) : 'Connect Wallet'
})

function buttonHandler() {
  if (!profile.address) {
    profile.connectWallet()
  }
}

onMounted(() => {})
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <AtomLogo class="header__logo" />

          <MoleculeNav class="header__nav" :links="navLinks" />
        </div>

        <div class="header__right">
          <AtomButton class="header__button" @click="buttonHandler">
            {{ buttonText }}
          </AtomButton>

          <MoleculeBurgerMenu class="header__burger-menu" :links="navLinks" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/organisms/organism-header';
</style>
