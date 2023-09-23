export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export class LinkedList {
  head: ListNode | null
  constructor() {
    this.head = null
  }

  append(val: number): void {
    if (!this.head) {
      this.head = new ListNode(val)
      return
    }
    let current = this.head
    while (current.next) current = current.next
    current.next = new ListNode(val)
  }

  prepend(val: number): void {
    this.head = new ListNode(val, this.head)
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
