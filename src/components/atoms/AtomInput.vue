<script setup lang="ts">
import { useVModel } from '@vueuse/core'

type InputContent = string | number | null
type InputType = 'text' | 'number' | 'password' | 'email' | 'url'

interface Props {
  modelValue?: InputContent
  placeholder?: string
  type?: InputType
  name?: string | null
  errorMessage?: string
  disabled?: boolean
  required?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputContent): void
}>()

const value = useVModel(props, 'modelValue', emit)

const placeholder = `${props.placeholder}${props.required ? '*' : ''}`
</script>

<template>
  <div class="input-wrapper">
    <input
      class="input"
      v-model="value"
      :placeholder="placeholder"
      :type="props.type"
      :disabled="props.disabled"
    />
    <div class="input-error">{{ errorMessage }}</div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/atoms/atom-input';
</style>
