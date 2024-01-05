interface SomeType {
  readonly prop: string
}
export function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`)
  // But we can't re-assign it.
  // obj.prop = "hello"
}

/* 

    u cant reassign a value to a readonly property,
    but u cant change an inner property value in it.

    - if u want u can use readonly in the inner prop "age".

*/

interface Home {
  readonly resident: { name: string; age: number }
}
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`)
  home.resident.age++
}
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  // home.resident = {
  //   name: "Victor the Evictor",
  //   age: 42,
  // }
}