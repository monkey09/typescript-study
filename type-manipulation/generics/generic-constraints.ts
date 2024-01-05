interface Lengthwise {
  length: number
}
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}
// loggingIdentity(3)
loggingIdentity({ length: 10, value: 3 })
loggingIdentity([3])



/*

    Using Type Parameters in Generic Constraints

*/
function getProperty<Type, key extends keyof Type>(obj: Type, key: key) {
  return obj[key]
}
const x = {a: 1, b: 2, c: 3}
getProperty(x, 'a')
// getProperty(x, 'n')