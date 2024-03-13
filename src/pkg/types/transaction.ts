import type { InfoField } from '@/pkg/types/info-field'

export type Transaction = {
  img: string
  date: Date
  infoFields: InfoField[]
}
