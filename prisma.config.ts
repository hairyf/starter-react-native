import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: { url: 'file:prisma/placeholder.db' },
  migrations: { path: 'src/database/migrations' },
})
