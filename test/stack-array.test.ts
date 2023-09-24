import { describe, it, beforeEach } from "node:test"
import { strictEqual, throws } from "node:assert"
import { Stack } from "../src/stack-array"

let stack: Stack<number>

const errorInfo = {
  message: "Error: Stack is empty",
}

describe("Stack Array module", () => {
  beforeEach(() => {
    stack = new Stack()
  })
  it("push", () => {
    stack.push(4)
    strictEqual(stack.size(), 1)
    strictEqual(stack.peek(), 4)
  })
  describe("pop", () => {
    it("Empty stack", () => {
      throws(() => {
        stack.pop()
      }, errorInfo)
    })
    it("Non-empty stack", () => {
      stack.push(5)
      const val = stack.pop()
      strictEqual(stack.size(), 0)
      strictEqual(val, 5)
    })
  })
})
