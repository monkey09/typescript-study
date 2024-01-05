interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw ""
}

let a = createLabel("typescript")
let b = createLabel(2.8)
let c = createLabel(Math.random() ? "hello" : 42)