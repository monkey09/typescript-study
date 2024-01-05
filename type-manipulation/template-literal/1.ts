type onEvent<T> = {
  on: <key extends string & keyof T>(f: `${key}Changed`, s: (newValue: T[key]) => void) => void
}

declare function makeWatchedObject<T>(obj: T): T & onEvent<T>

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
})
 
person.on("firstNameChanged", (newValue) => {
  console.log(`${newValue.toUpperCase} is changed`)
})

person.on("ageChanged", (newValue) => {
  if (newValue < 0) {
    console.warn("warning! negative age")
  }
})