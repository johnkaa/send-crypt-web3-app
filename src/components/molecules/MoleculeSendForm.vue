<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useForm } from 'vee-validate'
import AtomButton from '@/components/atoms/AtomButton.vue'
import AtomInput from '@/components/atoms/AtomInput.vue'
import { sendSchema } from '@/pkg/schemas/send'

const isLoading: Ref<boolean> = ref(false)

const { values, validate, errors, defineField } = useForm({
  validationSchema: sendSchema
})
const [receiverAddress, receiverAddressAttrs] = defineField('receiverAddress')
const [amount, amountAttrs] = defineField('amount')
const [gifLink, gifLinkAttrs] = defineField('gifLink')
const [message, messageAttrs] = defineField('message')

async function fetchSend() {
  const { valid } = await validate()
  if (!valid) return

  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <form class="send-form" @submit.prevent="fetchSend">
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
