import { createStorage } from 'unstorage'
import { asyncStorageDriver } from './storage.driver'

export const storage = createStorage({
  driver: asyncStorageDriver({ id: 'storage' }),
})
