<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Web3 } from 'web3'
import { ethers } from 'ethers'
import { useForm } from 'vee-validate'
import { useProfile } from '@/store/profile'
import { sendSchema } from '@/pkg/schemas/send'
import { toast } from 'vue3-toastify'
import AtomButton from '@/components/atoms/AtomButton.vue'
import AtomInput from '@/components/atoms/AtomInput.vue'

const isLoading: Ref<boolean> = ref(false)

const { validate, errors, defineField } = useForm({
  validationSchema: sendSchema
})
const [receiverAddress, receiverAddressAttrs] = defineField('receiverAddress')
const [amount, amountAttrs] = defineField('amount')
const [gifLink, gifLinkAttrs] = defineField('gifLink')
const [message, messageAttrs] = defineField('message')

// test data
receiverAddress.value = '0x07aB68DFf67648311929B1365C69DA85a3E5ED8a'
amount.value = 0.5
gifLink.value =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Flearn.g2.com%2Fgifs-for-marketing&psig=AOvVaw0TSh4-9e5ti_7mWycwyT2g&ust=1710675993365000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjExuja-IQDFQAAAAAdAAAAABAJ'

const profile = useProfile()

async function fetchSend() {
  if (!profile.address) {
    await profile.connectWallet()
  }

  const { valid } = await validate()
  if (!valid) return

  isLoading.value = true
  try {
    const ethereum = window.ethereum
    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: profile.address,
          to: receiverAddress.value,
          value: Number(amount.value * 1000000000000000000).toString(16)
        }
      ]
    })
  } catch (e) {
    toast.error(e.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form class="send-form" @submit.prevent="fetchSend" novalidate>
    <AtomInput
      v-model:model-value="receiverAddress"
      v-bind="receiverAddressAttrs"
      :disabled="isLoading"
      :error-message="errors.receiverAddress"
      class="send-form__input"
      placeholder="Receiver Address"
      required
    />
    <AtomInput
      v-model:model-value="amount"
      v-bind="amountAttrs"
      :disabled="isLoading"
      :error-message="errors.amount"
      class="send-form__input"
      type="number"
      placeholder="Amount (ETH)"
      required
    />
    <AtomInput
      v-model:model-value="gifLink"
      v-bind="gifLinkAttrs"
      :disabled="isLoading"
      :error-message="errors.gifLink"
      class="send-form__input"
      placeholder="Enter GIF Link"
      required
    />
    <AtomInput
      v-model:model-value="message"
      v-bind="messageAttrs"
      :disabled="isLoading"
      :error-message="errors.message"
      class="send-form__input"
      placeholder="Enter Message"
      required
    />

    <AtomButton class="send-form__button" :disabled="isLoading" type="submit">Send Now</AtomButton>
  </form>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/molecules/molecule-send-form';
</style>
