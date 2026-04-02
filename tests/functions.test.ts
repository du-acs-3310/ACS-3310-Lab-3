import { describe, it, expect } from 'vitest'
import {
  removeNegatives,
  endsWith,
  take,
  countBy,
  unique,
} from '../src/functions'

describe('removeNegatives', () => {
  it('removes negative numbers', () => {
    expect(removeNegatives([-3, -1, 2, 4])).toEqual([2, 4])
  })

  it('keeps 0 and positive numbers', () => {
    expect(removeNegatives([-2, 0, 1, 3])).toEqual([0, 1, 3])
  })

  it('returns an empty array when all numbers are negative', () => {
    expect(removeNegatives([-5, -2, -1])).toEqual([])
  })
})

describe('endsWith', () => {
  it('returns true when the string ends with the given ending', () => {
    expect(endsWith('hello', 'lo')).toBe(true)
  })

  it('returns false when the string does not end with the given ending', () => {
    expect(endsWith('hello', 'he')).toBe(false)
  })

  it('returns true when the ending is the whole string', () => {
    expect(endsWith('cat', 'cat')).toBe(true)
  })
})

describe('take', () => {
  it('returns the first count items', () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2])
  })

  it('returns an empty array when count is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([])
  })

  it('returns the whole array when count is larger than array length', () => {
    expect(take([1, 2], 5)).toEqual([1, 2])
  })
})

describe('countBy', () => {
  it('counts items by the key returned from the callback', () => {
    const words = ['ant', 'bear', 'cat', 'dog']
    expect(countBy(words, word => String(word.length))).toEqual({
      '3': 3,
      '4': 1,
    })
  })

  it('counts repeated categories correctly', () => {
    const nums = [1, 2, 3, 4, 5, 6]
    expect(countBy(nums, n => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({
      odd: 3,
      even: 3,
    })
  })

  it('returns an empty object for an empty array', () => {
    expect(countBy([], () => 'x')).toEqual({})
  })
})

describe('unique', () => {
  it('removes duplicate numbers', () => {
    expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3])
  })

  it('preserves the first occurrence order', () => {
    expect(unique(['b', 'a', 'b', 'c', 'a'])).toEqual(['b', 'a', 'c'])
  })

  it('returns an empty array when given an empty array', () => {
    expect(unique([])).toEqual([])
  })
})