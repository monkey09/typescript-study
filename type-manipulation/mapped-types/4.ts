type removekindkey<Type> = {
  [key in keyof Type as Exclude<key, "kind">]: Type[key]
}
export type test = {
  kind: string
  name: string
  age: number
}
export type test2 = removekindkey<test>



type EventConfig<T extends { kind: string }> = {
  [key in T as key["kind"]]: (e: key) => void
}
type SquareEvent = { kind: "square", x: number, y: number }
type CircleEvent = { kind: "circle", radius: number }
type Config = EventConfig<SquareEvent | CircleEvent>



type containage<T> = {
  [key in keyof T]: T[key] extends {age: number} ? true : false
}
type persons = {
  hashim: {name: 'hashim', age: 18},
  ahmad: {name: 'ahmad', jop: 'SWeng'}
}
type personContainAge = containage<persons>