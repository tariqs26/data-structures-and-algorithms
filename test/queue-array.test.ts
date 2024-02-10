import { describe, it, beforeEach } from "node:test"
import { strictEqual, throws } from "node:assert"
import { Queue } from "./../src/queue-array"

const errorInfo = {
  message: "Error: Cannot dequeue from empty queue.",
}

describe("Queue Array module", () => {
  let queue: Queue<number>

  beforeEach(() => {
    queue = new Queue()
  })

  it("enqueue", () => {
    queue.enqueue(4)
    strictEqual(queue.size, 1)
    strictEqual(queue.front(), 4)
    strictEqual(queue.back(), 4)

    queue.enqueue(5)
    strictEqual(queue.size, 2)
    strictEqual(queue.front(), 4)
    strictEqual(queue.back(), 5)
  })

  describe("pop", () => {
    it("Empty Queue", () => {
      throws(() => {
        queue.dequeue()
      }, errorInfo)
    })

    it("Non-empty stack", () => {
      queue.enqueue(5)
      const val = queue.dequeue()
      strictEqual(queue.size, 0)
      strictEqual(val, 5)
    })
  })

  it("isEmpty", () => {
    strictEqual(queue.isEmpty(), true)
    queue.enqueue(5)
    strictEqual(queue.isEmpty(), false)
  })
})
