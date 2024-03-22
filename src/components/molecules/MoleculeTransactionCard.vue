<script setup lang="ts">
import type { Transaction } from '@/pkg/types/transaction'
import { useDateFormatter } from '@/pkg/plugins/date-formatter'
import AtomBadge from '@/components/atoms/AtomBadge.vue'
import AtomInfoField from '@/components/atoms/AtomInfoField.vue'

interface Props {
  transaction: Transaction
}

const props = defineProps<Props>()

const dateFormatter = useDateFormatter()
</script>

<template>
  <div class="transaction-card">
    <div class="transaction-card__top">
      <video
        :src="props.transaction.img"
        class="transaction-card__img"
        autoplay
        loop
        muted
        width="270"
        height="270"
      />
      <AtomBadge class="transaction-card__date">{{
        dateFormatter.formatDatetimeWithoutTimeZone(props.transaction.date)
      }}</AtomBadge>
    </div>
    <AtomInfoField
      v-for="(infoField, index) in props.transaction.infoFields"
      :key="index"
      :info-field="infoField"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/molecules/molecule-transaction-card';
</style>
