/**
 * Stack implementation using array
 */

class EmptyStackError extends Error {
  constructor() {
    super("Error: Stack is empty")
  }
}
export class Stack<T> {
  data: T[]
  constructor() {
    this.data = []
  }

  push(val: T) {
    this.data.push(val)
  }

  pop() {
    if (!this.data.length) throw new EmptyStackError()
    return this.data.pop()
  }

  peek() {
    if (!this.data.length) throw new EmptyStackError()
    return this.data.at(this.data.length - 1)
  }

  size() {
    return this.data.length
  }

  clear() {
    this.data = []
  }
}
