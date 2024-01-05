type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never
 
export type Num = GetReturnType<() => number>  
// type Num = number
 
export type Str = GetReturnType<(x: string) => string>  
// type Str = string
 
export type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>
// type Bools = boolean[]