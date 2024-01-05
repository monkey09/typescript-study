declare function f1(): {a: number; b: string}

export type t0 = ReturnType<() => string>
// string

export type t1 = ReturnType<(s: string) => void>
// void

export type t2 = ReturnType<typeof f1>
// {a: number; b: string}

export type t3 = ReturnType<<T>() => T>
// unknown

export type t4 = ReturnType<any>
// any

export type t5 = ReturnType<never>
// never

export type t6 = ReturnType<<T extends U, U extends number[]>() => T>
// number[]