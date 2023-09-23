import { describe, it, beforeEach } from "node:test"
import assert from "node:assert"
import { LinkedList } from "../src/linked-list"

let list: LinkedList<number>

describe("LinkedList module", () => {
  beforeEach(() => {
    list = new LinkedList()
  })
  it("append", () => {
    list.append(4)
    assert.strictEqual(list.size(), 1)
    assert.strictEqual(list.head?.val, 4)
  })
  it("prepend", () => {
    list.append(4)
    list.prepend(5)
    assert.strictEqual(list.head?.val, 5)
  })
  describe("at", () => {
    it("Index out of bounds", () => {
      assert.throws(
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
      assert.deepEqual(list.at(0), 4)
    })
  })
  describe("contains", () => {
    it("Not in list", () => {
      assert.deepEqual(list.contains(4), false)
    })
    it("In list", () => {
      list.append(4)
      assert.deepEqual(list.contains(4), true)
    })
  })
  describe("pop", () => {
    it("Empty list", () => {
      assert.throws(
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
      assert.strictEqual(list.size(), 0)
      assert.strictEqual(val, 4)
    })
    it("Multi-length list", () => {
      list.append(4)
      list.append(5)
      let val = list.pop()
      assert.strictEqual(list.size(), 1)
      assert.strictEqual(val, 5)
      val = list.pop()
      assert.strictEqual(list.size(), 0)
      assert.strictEqual(val, 4)
    })
  })
  it("clear", () => {
    list.append(4)
    list.clear()
    assert.strictEqual(list.head, null)
  })
  describe("toString", () => {
    it("Empty list", () => {
      assert.strictEqual(list.toString(), "null")
    })
    it("Non-empty list", () => {
      list.append(4)
      assert.strictEqual(list.toString(), "4 -> null")
    })
  })
})
