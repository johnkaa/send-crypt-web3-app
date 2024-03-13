<script lang="ts" setup>
import AtomLogo from '@/components/atoms/AtomLogo.vue'

const socialMediaItems: {
  url: string
  icon: string
}[] = [
  {
    url: '/',
    icon: '#icon-twitter'
  },
  {
    url: '/',
    icon: '#icon-linkedin'
  },
  {
    url: '/',
    icon: '#icon-facebook'
  }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <AtomLogo class="footer__logo" />
        <div class="footer__sm">
          <a
            :href="socialMedia.url"
            v-for="(socialMedia, index) in socialMediaItems"
            :key="index"
            class="footer__sm-item"
          >
            <svg class="footer__sm-icon">
              <use :href="socialMedia.icon"></use>
            </svg>
          </a>
        </div>
        <p class="footer__copyright">Copyright © 2024 SendCrypt. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/organisms/organism-footer';
</style>
