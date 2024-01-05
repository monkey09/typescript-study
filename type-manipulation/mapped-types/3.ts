/* 

    replace key from an object with a new constant key using "as" operator

*/
type NewKeyType = "d"
type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as NewKeyType]: Type[Properties]
}
type test = {
  f: 'hashim'
}
type test2 = MappedTypeWithNewProperties<test>

/* 

    replace key from an object with a new variable key using "as" operator

*/
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}
interface Person {
  name: string
  age: number
  location: string
}
type LazyPerson = Getters<Person>