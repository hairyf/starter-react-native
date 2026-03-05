import type { Kysely } from 'kysely'
import type { DB } from '../types'
import { Model } from 'kysely-model'

export class Post extends Model<DB, 'post', 'id'> {
  constructor(db: Kysely<DB>) {
    super(db, 'post', 'id')
  }
}
