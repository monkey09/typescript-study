const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
]
 
export type Person = typeof MyArray[number]

type Age = typeof MyArray[number]["age"]
type Age2 = Person["age"]

/* 

    You can only use types when indexing, meaning you can’t use a const to make a variable reference

*/

const age = "age"
// type Age3 = Person[age]
type Age3 = Person[typeof age]