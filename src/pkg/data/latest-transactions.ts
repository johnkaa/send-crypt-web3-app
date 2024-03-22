import type { Transaction } from '@/pkg/types/transaction'

const latestTransactions: Transaction[] = []

for (let i = 1; i <= 6; i++) {
  latestTransactions.push({
    img: `/images/cards/demo-${i}.webm`,
    date: new Date(),
    infoFields: [
      {
        title: 'From',
        value: 'dUfUenk...hPklj3WC'
      },
      {
        title: 'To',
        value: 'Q2IcH9P...ZwG4WsvY'
      },
      {
        title: 'Amount',
        value: '0.0004 ETH'
      },
      {
        title: 'Message',
        value: 'Hello Web3 Developers'
      }
    ]
  })
}

export default latestTransactions
