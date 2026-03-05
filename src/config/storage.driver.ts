import type { Configuration } from 'react-native-mmkv'
import { createMMKV } from 'react-native-mmkv'
import { defineDriver } from 'unstorage'

export const mmkvStorageDriver = defineDriver<Configuration, never>((options) => {
  const mmkv = createMMKV(options)
  return {
    name: 'mmkv-storage',
    options,
    async hasItem(key) {
      return mmkv.contains(key)
    },
    async getItem(key) {
      const value = mmkv.getString(key)
      return value
    },
    async setItem(key, value) {
      mmkv.set(key, value)
    },
    async removeItem(key) {
      mmkv.remove(key)
    },
    async getKeys() {
      return mmkv.getAllKeys()
    },
    async clear() {
      mmkv.clearAll()
    },
    async watch(callback) {
      const unsub = mmkv.addOnValueChangedListener((key) => {
        callback('update', key)
      })
      return () => unsub.remove()
    },
  }
})
