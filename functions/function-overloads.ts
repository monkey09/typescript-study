// functions that may take 1 timestamp or each type
// function overloads is indicate couple of functions with each use case

export function makeDate(timestamp: number): Date
export function makeDate(m: number, d: number, y: number): Date
export function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)
// const d3 = makeDate(1, 3)

/* 


    Always prefer parameters with union types instead of overloads when possible


*/