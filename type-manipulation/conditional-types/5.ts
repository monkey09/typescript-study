type Args<T> = T extends (...args: infer U) => any ? U : never

export type test1 = Args<(s: string) => void>
export type test2 = Args<() => void>
export type test3 = Args<(s: string, n: number) => void>
export type test4 = Args<string>
export type test5 = Args<({a, b}: {a: string; b: number}) => void>