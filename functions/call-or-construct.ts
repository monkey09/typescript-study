/* 
Some objects, like JavaScript’s Date object, 
can be called with or without new. 
You can combine call and construct signatures in the same type arbitrarily
*/

interface CallOrConstruct {
  (n?: number): string
  new (s: string): Date
}