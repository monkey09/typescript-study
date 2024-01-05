type OnlyBoolsAndHorses = {
  [key: string]: boolean
}
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean
}

type Features = {
  darkMode: () => void
  newUserProfile: () => void
}
 
type FeatureOptions = OptionsFlags<Features>