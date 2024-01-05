function identity<Type>(arg: Type): Type {
  return arg
}
let myIdentity1: <Type>(arg: Type) => Type = identity
let myIdentity2: { <Type>(arg: Type): Type } = identity