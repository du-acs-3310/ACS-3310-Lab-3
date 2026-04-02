// Return a new array with all negative numbers removed.
// Keep 0 and positive numbers.
// Example:
// removeNegatives([-2, 0, 3]) -> [0, 3]
export function removeNegatives(nums: number[]): number[] {
  return nums.filter(n => n > 0) // bug
}

// Return true if text ends with the given ending.
// Example:
// endsWith('hello', 'lo') -> true
export function endsWith(text: string, ending: string): boolean {
  return text.startsWith(ending) // bug
}

// Return the first `count` items from the array.
// If count is 0, return an empty array.
// If count is larger than the array length, return the whole array.
// Example:
// take([1, 2, 3, 4], 2) -> [1, 2]
export function take<T>(arr: T[], count: number): T[] {
  return arr.slice(0, count + 1) // bug
}

// Count how many items belong to each group.
// The callback returns the group name for each item.
// Example:
// countBy(['ant', 'bear', 'cat'], word => String(word.length))
// -> { '3': 2, '4': 1 }
export function countBy<T>(arr: T[], fn: (item: T) => string): Record<string, number> {
  const result: Record<string, number> = {}
  for (const item of arr) {
    const key = fn(item)
    result[key] = 1 // bug
  }
  return result
}

// Return a new array with duplicate values removed.
// Keep the first occurrence of each value.
// Example:
// unique([1, 1, 2, 3, 2]) -> [1, 2, 3]
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)] // correct
}