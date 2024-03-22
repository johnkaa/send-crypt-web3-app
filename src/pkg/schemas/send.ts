import * as yup from 'yup'
import {
  useEthereumAddressValidation,
  useLinkValidation,
  useStringValidation,
  useValueValidation
} from '@/pkg/validations'

export const sendSchema = yup.object({
  receiverAddress: useEthereumAddressValidation('Receiver Address'),
  amount: useValueValidation('Amount'),
  gifLink: useLinkValidation('Gif Link'),
  message: useStringValidation('Message')
})
