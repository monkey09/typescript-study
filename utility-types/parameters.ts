declare function f1(args: {a: number; b: string}): void

export type t0 = Parameters<() => void>
// []

export type t1 = Parameters<(s: string) => void>
// [s: string]

export type t2 = Parameters<typeof f1>
// [args: {a: number; b: string}]

export type t3 = Parameters<<T>(arg: T) => void>
// [arg: unknown]

export type t4 = Parameters<any>
// unknown[]

export type t5 = Parameters<never>
// never