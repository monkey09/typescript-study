// generic objects
interface Box<Type> {
  contents: Type
}

// generic functions
function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents
}

type OrNull<Type> = Type | null
 
type OneOrMany<Type> = Type | Type[]
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>