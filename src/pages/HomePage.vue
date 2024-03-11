<script setup lang="ts">
import AtomTitle from '@/components/atoms/AtomTitle.vue'
import AtomButton from '@/components/atoms/AtomButton.vue'
import MoleculeAboutCard from '@/components/molecules/MoleculeAboutCard.vue'

const aboutCards = [
  {
    icon: '#icon-security',
    title: 'Strong Security',
    text: 'Secure transaction and record information with 2-factor authentication (2FA)'
  },
  {
    icon: '#icon-payment',
    title: 'Payment Options',
    text: 'Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer'
  },
  {
    icon: '#icon-info',
    title: 'Market Updated',
    text: 'The most accurate and trusted source for market cap, valuation, and cryptocurrency information'
  }
]
</script>

<template>
  <div class="home">
    <div class="top">
      <div class="container">
        <div class="top__inner">
          <AtomTitle class="top__title" tag="h1">Start Sending Crypto Currency Easily</AtomTitle>
          <p class="top__text">Join the world largest crypto exchange</p>
          <AtomButton class="top__btn">Connect Wallet</AtomButton>
        </div>

        <img class="top__img" src="/images/decor.png" width="527" height="502" alt="litecoin" />
      </div>
    </div>

    <div class="about">
      <div class="container">
        <div class="about__inner">
          <MoleculeAboutCard
            v-for="(aboutCard, index) in aboutCards"
            :key="index"
            :icon="aboutCard.icon"
            :title="aboutCard.title"
            :text="aboutCard.text"
          />
        </div>
      </div>
    </div>

    <div class="send">
      <div class="container">
        <div class="send__inner">
          <form class="send__form"></form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages/home';
</style>
