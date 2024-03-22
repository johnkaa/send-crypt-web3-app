import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import { Web3 } from 'web3'

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

      const web3 = new Web3(window.ethereum)
      await ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await web3.eth.getAccounts()

      this.address = accounts[0]
    }
  }
})
