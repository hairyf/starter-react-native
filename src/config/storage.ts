import { createStorage } from 'unstorage'
import { mmkvStorageDriver } from './storage.driver'

export const storage = createStorage({
  driver: mmkvStorageDriver({ id: 'default' }),
})
