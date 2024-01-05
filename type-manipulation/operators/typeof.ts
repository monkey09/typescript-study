type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function f() {
  return { x: 10, y: 3 }
}
// type P = ReturnType<f> error, because js in ts
export type P = ReturnType<typeof f>

declare function msgbox (s: string): string
let shouldContinue: ReturnType<typeof msgbox>