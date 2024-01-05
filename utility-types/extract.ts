type t0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
const test1: t0 = 'a'
// 'a'

export type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number }

const test2: Extract<Shape, {kind: 'circle'}> = {
  kind: 'circle',
  radius: 9
}