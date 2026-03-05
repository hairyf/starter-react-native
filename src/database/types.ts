import type { ColumnType } from 'kysely'

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export interface Post {
  id: string
  title: string
  content: string
  createdAt: Generated<string>
  updatedAt: string
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: Generated<string>
  updatedAt: string
}

export interface DB {
  post: Post
  user: User
}
