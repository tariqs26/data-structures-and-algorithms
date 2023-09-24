import { describe, it, beforeEach } from "node:test"
import { strictEqual, throws } from "node:assert"
import { LinkedList } from "../src/linked-list"

describe("LinkedList module", () => {
  let list: LinkedList<number>

  beforeEach(() => {
    list = new LinkedList()
  })
  it("append", () => {
    list.append(4)
    strictEqual(list.size(), 1)
    strictEqual(list.head?.val, 4)
  })
  it("prepend", () => {
    list.append(4)
    list.prepend(5)
    strictEqual(list.head?.val, 5)
  })
  describe("at", () => {
    it("Index out of bounds", () => {
      throws(
        () => {
          list.at(0)
        },
        {
          message: "Index out of bounds",
        }
      )
    })
    it("Valid index", () => {
      list.append(4)
      strictEqual(list.at(0), 4)
    })
  })
  describe("contains", () => {
    it("Not in list", () => {
      strictEqual(list.contains(4), false)
    })
    it("In list", () => {
      list.append(4)
      strictEqual(list.contains(4), true)
    })
  })
  describe("pop", () => {
    it("Empty list", () => {
      throws(
        () => {
          list.pop()
        },
        {
          message: "Cannot pop from empty list",
        }
      )
    })
    it("Single length list", () => {
      list.append(4)
      const val = list.pop()
      strictEqual(list.size(), 0)
      strictEqual(val, 4)
    })
    it("Multi-length list", () => {
      list.append(4)
      list.append(5)
      let val = list.pop()
      strictEqual(list.size(), 1)
      strictEqual(val, 5)
      val = list.pop()
      strictEqual(list.size(), 0)
      strictEqual(val, 4)
    })
  })
  it("clear", () => {
    list.append(4)
    list.clear()
    strictEqual(list.head, null)
  })
  describe("toString", () => {
    it("Empty list", () => {
      strictEqual(list.toString(), "null")
    })
    it("Non-empty list", () => {
      list.append(4)
      strictEqual(list.toString(), "4 -> null")
    })
  })
})
