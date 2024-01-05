export function doSomething(pair: readonly [string, number]) {
  // pair[0] = "hello!"
}

let point = [3, 4] as const
function distanceFromOrigin([x, y]: readonly [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2)
}
distanceFromOrigin(point)