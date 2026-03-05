import type { DB } from './types'
import SQLite from 'expo-sqlite'
import { Kysely } from 'kysely'
import { ExpoSqliteDialect } from 'kysely-dialect-expo'
import { SqlMigrator } from 'kysely-migrate-sql'
import { Post } from './models/post'
import { User } from './models/user'

const connection = new Kysely<DB>({
  dialect: new ExpoSqliteDialect({ database: () => SQLite.openDatabaseAsync('main.db') }),
})

export const db = Object.assign(connection, {
  user: new User(connection),
  post: new Post(connection),
})

export const migrator = new SqlMigrator(db, {
  migrations: {
    20260305080528: require('prisma/migrations/20260305080528/migration.sql'),
  },
})
