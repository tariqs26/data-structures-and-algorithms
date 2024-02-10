/**
 * Queue implementation using array
 */
export class Queue<T> {
  data: T[]
  size: number

  constructor() {
    this.data = []
    this.size = 0
  }

  enqueue(val: T) {
    this.data.push(val)
    this.size++
  }

  dequeue() {
    if (this.isEmpty())
      throw new Error("Error: Cannot dequeue from empty queue.")
    this.size--
    return this.data.shift()
  }

  front() {
    return this.data.at(0)
  }

  back() {
    return this.data.at(-1)
  }

  isEmpty() {
    return this.size === 0
  }
}
