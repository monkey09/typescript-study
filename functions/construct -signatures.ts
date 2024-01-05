type SomeConstructor = {
  new (s: string): {}
}

function fn(ctor: SomeConstructor) {
  return new ctor("hello")
}