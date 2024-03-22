import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

interface Options {
  address: string
}

export const useProfile = defineStore('profile', {
  state: (): Options => ({
    address: ''
  }),

  actions: {
    async connectWallet() {
      const ethereum = window.ethereum
      if (!ethereum) {
        return toast.error(
          'MetaMask is not installed! Please install it to your extensions for connect your wallet.'
        )
      }

      const res = await ethereum.request({ method: 'eth_requestAccounts' })
      this.address = res[0]
    }
  }
})
