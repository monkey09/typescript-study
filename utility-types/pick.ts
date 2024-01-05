export interface Props {
  name: string
  age: number
  weight: number
}

type Type = Pick<Props, 'age' | 'name'>

const test: Type = {
  age: 18,
  name: 'hashim'
}