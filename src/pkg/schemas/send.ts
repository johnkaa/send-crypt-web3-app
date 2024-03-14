import * as yup from 'yup'
import {
  useEthereumAddressValidation,
  useLinkValidation,
  useNumberValidation,
  useStringValidation
} from '@/pkg/validations'

export const sendSchema = yup.object({
  receiverAddress: useEthereumAddressValidation('Receiver Address'),
  amount: useNumberValidation('Amount'),
  gifLink: useLinkValidation('Gif Link'),
  message: useStringValidation('Message')
})
