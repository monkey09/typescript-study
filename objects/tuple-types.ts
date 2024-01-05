/*
      A tuple type is another sort of Array type that 
      knows exactly how many elements it contains, 
      and exactly which types it contains at specific positions.
*/

function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash
  console.log(inputString)
  console.log(hash)
}