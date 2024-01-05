export interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}

const test: Omit<Todo, 'createdAt'> = {
  completed: true,
  description: 'lorem',
  title: 'lorem'
}