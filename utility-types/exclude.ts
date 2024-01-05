type t0 = Exclude<'a' | 'b' | 'c', 'c'>
const test1: t0 = "a"
// 'a' | 'b'

export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number }

const test2: Exclude<Shape, {kind: 'circle'}> = {
  kind: 'triangle',
  x: 18,
  y: 20
}