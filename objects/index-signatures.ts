interface StringArray {
  [index: number]: string
}

interface NumberOrStringDictionary {
  [index: string]: number | string
  length: number
  name: string
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}