interface GenericIdentityFn<Type> {
  (arg: Type): Type
}
export function identity<Type>(arg: Type): Type {
  return arg
}
let myIdentity: GenericIdentityFn<number> = identity