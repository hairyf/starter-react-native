import { defineStore } from 'valtio-define'

export const user = defineStore({
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
  },
})
