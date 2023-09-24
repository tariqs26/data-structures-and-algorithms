class ListNode<T> {
  constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export class LinkedList<T> {
  head: ListNode<T> | null
  constructor() {
    this.head = null
  }

  append(val: T): void {
    if (!this.head) {
      this.head = new ListNode(val)
      return
    }
    let current = this.head
    while (current.next) current = current.next
    current.next = new ListNode(val)
  }

  prepend(val: T): void {
    this.head = new ListNode(val, this.head)
  }

  pop(): T {
    if (!this.head) throw new Error("Cannot pop from empty list")
    let current = this.head
    while (current.next) {
      if (!current.next.next) {
        const val = current.next.val
        current.next = null
        return val
      }
      current = current.next
    }
    const val = this.head.val
    this.head = null
    return val
  }

  at(index: number) {
    if (index < 0 || index >= this.size())
      throw new Error("Index out of bounds")
    let current = this.head
    let i = 0
    while (current) {
      if (i == index) return current.val
      current = current.next
      i++
    }
  }

  contains(val: T): boolean {
    let current = this.head
    while (current) {
      if (current.val === val) return true
      current = current.next
    }
    return false
  }

  size(): number {
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
      ret += `${current.val} -> `
      current = current.next
    }
    return ret + "null"
  }
}
