<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProfile } from '@/store/profile'
import { formatAddress } from '@/pkg/plugins/address-formatter'
import AtomTitle from '@/components/atoms/AtomTitle.vue'
import AtomButton from '@/components/atoms/AtomButton.vue'
import MoleculeAboutCard from '@/components/molecules/MoleculeAboutCard.vue'
import MoleculeSendForm from '@/components/molecules/MoleculeSendForm.vue'
import OrganismLatestTransactions from '@/components/organisms/OrganismLatestTransactions.vue'

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

const send = ref(null)

const profile = useProfile()

const buttonText = computed(() => {
  return profile.address ? 'Send Crypt' : 'Connect Wallet'
})

function connectWallet() {
  profile.connectWallet()
}

function topButtonHandler() {
  if (profile.address) {
    if (!send.value) return

    const sendPosition = send.value.getBoundingClientRect().y - 120
    window.scrollTo({
      top: sendPosition,
      behavior: 'smooth'
    })
  } else {
    connectWallet()
  }
}
</script>

<template>
  <div class="home">
    <div class="top">
      <div class="container">
        <div class="top__inner">
          <div class="top__info">
            <AtomTitle class="top__title" tag="h1">Start Sending Crypto Currency Easily</AtomTitle>
            <p class="top__text">Join the world largest crypto exchange</p>
            <AtomButton class="top__btn" @click="topButtonHandler">{{ buttonText }}</AtomButton>
          </div>

          <div class="top__decor">
            <img
              class="top__decor-img"
              src="/images/decor.webp"
              width="527"
              height="502"
              alt="litecoin"
            />
          </div>
        </div>
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

    <div class="send" ref="send">
      <div class="container">
        <div class="send__inner">
          <div class="send__decor">
            <img
              class="send__decor-img"
              src="/images/decor.webp"
              width="527"
              height="502"
              alt="litecoin"
            />
          </div>

          <MoleculeSendForm class="send__form" />
        </div>
      </div>
    </div>

    <OrganismLatestTransactions class="latest-transactions" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages/home';
</style>
