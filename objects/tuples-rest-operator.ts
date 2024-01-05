function readButtonInput1(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args
}

/* 
    is the same as 
*/

function readButtonInput2(name: string, version: number, ...input: boolean[]) {
}