export interface Value {
  name: string
  age: number
}

type Key = 'cat' | 'dog' | 'wolf'

const test: Record<Key, Value> = {
  cat: {age: 8, name: 'name1'},
  dog: {age: 5, name: 'name2'},
  wolf: {age: 3, name: 'name3'}
}