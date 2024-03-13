<script setup lang="ts">
import AtomTitle from '@/components/atoms/AtomTitle.vue'
import MoleculeTransactionCard from '@/components/molecules/MoleculeTransactionCard.vue'
import latestTransactions from '@/pkg/data/latest-transactions'
</script>

<template>
  <div class="latest-transactions">
    <div class="container">
      <AtomTitle class="latest-transactions__title" tag="h2">Latest Transactions</AtomTitle>
      <div class="latest-transactions__items">
        <MoleculeTransactionCard
          v-for="(transaction, index) in latestTransactions"
          :key="index"
          :transaction="transaction"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/components/organisms/organism-latest-transactions';
</style>
