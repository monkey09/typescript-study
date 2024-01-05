// note that in these examples T was auto inserted

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"])
// n is of type 'number'
const n = firstElement([1, 2, 3])
// u is of type undefined
const u = firstElement([])



function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func)
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n))



function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3])
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob")
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100)