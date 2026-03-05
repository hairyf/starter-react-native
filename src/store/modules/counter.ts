import { defineStore } from 'valtio-define'
import { persist } from 'valtio-define/plugins/persist'
import { storage } from '@/config/storage'

export const counter = defineStore({
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
  getters: {
    doubleCount() {
      return this.count * 2
    },
  },
  persist: {
    key: 'counter',
    storage,
  },
})

counter.use(persist({ automount: false }))
