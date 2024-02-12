import { describe, test, beforeEach, expect } from "vitest"
import { Stack } from "../src/data-structures/stack-array"

const errorMessage = "Error: Cannot pop from empty stack."

describe("Stack Array module", () => {
  let stack: Stack<number>

  beforeEach(() => {
    stack = new Stack()
  })

  test("push", () => {
    stack.push(4)
    expect(stack.size).toBe(1)
    expect(stack.peek()).toBe(4)
  })

  describe("pop", () => {
    test("Empty stack", () => {
      expect(() => {
        stack.pop()
      }).toThrowError(errorMessage)
    })

    test("Non-empty stack", () => {
      stack.push(5)
      const val = stack.pop()
      expect(stack.size).toBe(0)
      expect(val).toBe(5)
    })
  })

  test("isEmpty", () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(5)
    expect(stack.isEmpty()).toBe(false)
  })
})
