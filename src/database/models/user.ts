import type { Kysely } from 'kysely'
import type { DB } from '../types'
import { Model } from 'kysely-model'

export class User extends Model<DB, 'user', 'id'> {
  constructor(db: Kysely<DB>) {
    super(db, 'user', 'id')
  }
}
