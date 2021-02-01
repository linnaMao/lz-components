export type TData = {
  name: string,
  age: number | string,
  context: string,
  [propName: string]: any
}

export type TEnum = {
  key: string,
  name: string,
  type?: string
}
