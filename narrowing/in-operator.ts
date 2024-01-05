type Fish = { swim: () => void }
type Bird = { fly: () => void }
type Human = { swim?: () => void; fly?: () => void }
 
function move1(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim()
  }
  return animal.fly()
}

function move2(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal  
    // (parameter) animal: Fish | Human
  } else {
    animal
    // (parameter) animal: Bird | Human
  }
}