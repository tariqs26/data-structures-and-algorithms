class ListNode<T> {
  constructor(public data: T, public next: ListNode<T> | null = null) {}
}

export class LinkedList<T> {
  head: ListNode<T> | null
  constructor() {
    this.head = null
  }

  append(data: T): void {
    if (!this.head) {
      this.head = new ListNode(data)
      return
    }
    let current = this.head
    while (current.next) current = current.next
    current.next = new ListNode(data)
  }

  prepend(data: T): void {
    this.head = new ListNode(data, this.head)
  }

  pop(): T {
    if (!this.head) throw new Error("Cannot pop from empty list")
    let current = this.head
    while (current.next) {
      if (!current.next.next) {
        const data = current.next.data
        current.next = null
        return data
      }
      current = current.next
    }
    const data = this.head.data
    this.head = null
    return data
  }

  at(index: number) {
    if (index < 0 || index >= this.size) throw new Error("Index out of bounds")
    let current = this.head
    let i = 0
    while (current) {
      if (i == index) return current.data
      current = current.next
      i++
    }
  }

  contains(data: T): boolean {
    let current = this.head
    while (current) {
      if (current.data === data) return true
      current = current.next
    }
    return false
  }

  get size(): number {
    let current = this.head
    let size = 0
    while (current) {
      size++
      current = current.next
    }
    return size
  }

  clear(): void {
    this.head = null
  }

  toString(): string {
    let current = this.head
    let ret = ""
    while (current) {
      ret += `${current.data} -> `
      current = current.next
    }
    return ret + "null"
  }
}
