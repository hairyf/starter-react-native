import { createAsyncStorage } from '@react-native-async-storage/async-storage'
import { defineDriver } from 'unstorage'

export const asyncStorageDriver = defineDriver<{ id: string }, never>((options) => {
  const storage = createAsyncStorage(options.id)
  return {
    name: 'async-storage',
    options,
    async hasItem(key) {
      return !!(await storage.getItem(key))
    },
    async getItem(key) {
      return storage.getItem(key)
    },
    async setItem(key, value) {
      return storage.setItem(key, value)
    },
    async removeItem(key) {
      return storage.removeItem(key)
    },
    async getKeys() {
      return storage.getAllKeys()
    },
    async clear() {
      return storage.clear()
    },
  }
})
