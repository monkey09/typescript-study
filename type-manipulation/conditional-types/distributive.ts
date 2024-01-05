type ToArray<Type> = Type extends any ? Type[] : never
 
type StrArrOrNumArr = ToArray<string | number>        
// type StrArrOrNumArr = string[] | number[]

/*
    
    To avoid that behavior use []

*/

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never
type StrArrOrNumArr2 = ToArrayNonDist<string | number>        