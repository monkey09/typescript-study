type DescribableFunction = {
  description: string
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6))
}
 
function myFunc(someArg: number) {
  return someArg > 3
}
myFunc.description = "default description"
 
doSomething(myFunc)

/* 
the function type expression syntax doesn’t allow for declaring properties. 
If we want to describe something callable with properties, 
we can write a call signature in an object type

Note that the syntax is slightly different compared to a function type expression
- use : between the parameter list and the return type rather than =>.
*/