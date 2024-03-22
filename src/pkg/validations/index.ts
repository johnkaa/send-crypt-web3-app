import * as yup from 'yup'

export function useStringValidation(label: string) {
  return yup.string().required().min(3).max(10).label(label)
}

export function useNumberValidation(label: string) {
  return yup
    .number()
    .required()
    .min(0)
    .nullable()
    .typeError(`${label} must be a number`)
    .label(label)
}

export function useEthereumAddressValidation(label: string) {
  const isValidEthereumAddress = (address: string) => {
    return /^(0x)?[0-9a-fA-F]{40}$/i.test(address)
  }

  return yup
    .string()
    .required()
    .test('isValidEthereumAddress', 'Invalid Ethereum address', isValidEthereumAddress)
    .label(label)
}

export function useValueValidation(label: string) {
  return yup
    .number()
    .required()
    .min(0)
    .max(10000)
    .nullable()
    .typeError(`${label} must be a number`)
    .label(label)
}

export function useLinkValidation(label: string) {
  const isValidLink = (link: string) => {
    return /^(ftp|http|https):\/\/[^ "]+(\.[^ "]+)+(\/[^ "]+)?$/.test(link)
  }

  return yup.string().required().test('isValidLink', 'Invalid link', isValidLink).label(label)
}
