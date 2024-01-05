export interface Props {
  a?: string
  b?: string
}

const test1: Props = {}

const test2: Required<Props> = {
  a: '',
  b: ''
}