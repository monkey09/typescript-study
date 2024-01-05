export interface Props {
  a: string
}

const test: Readonly<Props> = {
  a: 'hello world'
}

// test.a = 'ff'
