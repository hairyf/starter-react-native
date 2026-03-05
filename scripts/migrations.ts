import fs from 'node:fs/promises'
import path from 'node:path'

async function main() {
  const migrations = await fs.readdir('src/database/migrations', { recursive: true })
  const migrationFiles = migrations.filter(file => file.endsWith('.sql'))
  const imports = migrationFiles.map((file) => {
    const name = path.dirname(file)
    const from = file.replace(/\\/g, '/')
    return `import m${name} from './${from}'`
  })
  const migrationsObject = [
    'export const migrations = {',
    ...migrationFiles.map((file) => {
      const name = path.dirname(file)
      return `  ${name}: m${name},`
    }),
    '}',
  ]
  const indexTs = [
    imports.join('\n'),
    '\n',
    '\n',
    migrationsObject.join('\n'),
    '\n',
    '\n',
    'export default migrations',
  ].join('')

  await fs.writeFile('src/database/migrations/index.ts', indexTs)
}

main()
