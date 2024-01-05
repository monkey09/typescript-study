export type Fish = { swim: () => void }
export type Bird = { fly: () => void }

const getSomePet = (): Fish | Bird => {
  return Math.ceil(Math.random()) * 10 > 5 ? {
    swim: () => console.log('fish')
  } : {
    fly: () => console.log('bird')
  }
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

let pet = getSomePet()
 
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}