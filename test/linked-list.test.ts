import { describe, test, beforeEach } from "node:test"
import { LinkedList } from "../src/linked-list"
import assert from "node:assert"

let list: LinkedList

describe("LinkedList module", () => {
  beforeEach(() => {
    list = new LinkedList()
  })
  test("append", () => {
    list.append(4)
    assert.strictEqual(list.size(), 1)
  })

  test("clear", () => {
    list.append(4)
    list.clear()
    assert.strictEqual(list.head, null)
  })
})
