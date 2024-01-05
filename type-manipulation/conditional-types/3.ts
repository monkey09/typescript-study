type Flatten1<T> = T extends any[] ? T[number] : T

type Flatten2<T> = T extends Array<infer Item> ? Item : T
 
// Extracts out the element type.
type Str = Flatten1<string[]>
    
// Leaves the type alone.
type Num = Flatten1<number>