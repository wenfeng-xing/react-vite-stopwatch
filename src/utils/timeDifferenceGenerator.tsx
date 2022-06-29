export default function* timeDifferenceGenerator(diff: number) {
  let initTime = Date.now()

  while (true) {
    const result = Date.now() - initTime + diff
    yield result
  }
}
