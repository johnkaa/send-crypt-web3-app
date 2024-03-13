<script setup lang="ts">
import { ref, type Ref } from 'vue'
import AtomButton from '@/components/atoms/AtomButton.vue'
import AtomInput from '@/components/atoms/AtomInput.vue'

const isLoading: Ref<boolean> = ref(false)

const receiverAddress: Ref<string> = ref('')
const amount: Ref<number> = ref()
const gifLink: Ref<string> = ref('')
const message: Ref<string> = ref('')

async function fetchSend() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <form class="send-form" @submit.prevent="fetchSend">
    <AtomInput
      class="send-form__input"
      v-model:model-value="receiverAddress"
      :disabled="isLoading"
      placeholder="Receiver Address"
    />
    <AtomInput
      class="send-form__input"
      v-model:model-value="amount"
      :disabled="isLoading"
      type="number"
      placeholder="Amount (ETH)"
    />
    <AtomInput
      class="send-form__input"
      v-model:model-value="gifLink"
      :disabled="isLoading"
      placeholder="Enter GIF Link"
    />
    <AtomInput
      class="send-form__input"
      v-model:model-value="message"
      :disabled="isLoading"
      placeholder="Enter Message"
      @submit.prevent="fetchSend"
    />

    <AtomButton class="send-form__button" :disabled="isLoading" type="submit">Send Now</AtomButton>
  </form>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/molecules/molecule-send-form';
</style>
