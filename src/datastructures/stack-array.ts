/**
 * Stack implementation using array
 */

export class Stack<T> {
  data: T[]
  size: number
  constructor() {
    this.data = []
    this.size = 0
  }

  push(val: T) {
    this.data.push(val)
    this.size++
  }

  pop() {
    if (this.isEmpty()) throw new Error("Error: Cannot pop from empty stack.")
    this.size--
    return this.data.pop()
  }

  peek() {
    return this.data.at(-1)
  }

  isEmpty() {
    return this.size === 0
  }
}
