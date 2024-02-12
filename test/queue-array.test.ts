import { describe, test, beforeEach, expect } from "vitest"
import { Queue } from "../src/datastructures/queue-array"

const errorMessage = "Error: Cannot dequeue from empty queue."

describe("Queue Array module", () => {
  let queue: Queue<number>

  beforeEach(() => {
    queue = new Queue()
  })

  test("enqueue", () => {
    queue.enqueue(4)
    expect(queue.size).toBe(1)
    expect(queue.front()).toBe(4)
    expect(queue.back()).toBe(4)

    queue.enqueue(5)
    expect(queue.size).toBe(2)
    expect(queue.front()).toBe(4)
    expect(queue.back()).toBe(5)
  })

  describe("pop", () => {
    test("Empty Queue", () => {
      expect(() => {
        queue.dequeue()
      }).toThrowError(errorMessage)
    })

    test("Non-empty stack", () => {
      queue.enqueue(5)
      const val = queue.dequeue()
      expect(queue.size).toBe(0)
      expect(val).toBe(5)
    })
  })

  test("isEmpty", () => {
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(5)
    expect(queue.isEmpty()).toBe(false)
  })
})
