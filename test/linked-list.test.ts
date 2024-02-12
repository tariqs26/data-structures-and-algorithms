import { describe, test, beforeEach, expect } from "vitest"
import { LinkedList } from "../src/data-structures/linked-list"

describe("LinkedList module", () => {
  let list: LinkedList<number>

  beforeEach(() => {
    list = new LinkedList()
  })

  test("append", () => {
    list.append(4)
    expect(list.size).toBe(1)
    expect(list.head?.data).toBe(4)
  })

  test("prepend", () => {
    list.append(4)
    list.prepend(5)
    expect(list.head?.data).toBe(5)
  })

  describe("at", () => {
    test("Index out of bounds", () => {
      expect(() => list.at(0)).toThrowError("Index out of bounds")
    })
    test("Valid index", () => {
      list.append(4)
      expect(list.at(0)).toBe(4)
    })
  })

  describe("contains", () => {
    test("Not in list", () => {
      expect(list.contains(4)).toBe(false)
    })
    test("In list", () => {
      list.append(4)
      expect(list.contains(4)).toBe(true)
    })
  })

  describe("pop", () => {
    test("Empty list", () => {
      expect(() => list.pop()).toThrowError("Cannot pop from empty list")
    })

    test("Single length list", () => {
      list.append(4)
      const val = list.pop()
      expect(list.size).toBe(0)
      expect(val).toBe(4)
    })

    test("Multi-length list", () => {
      list.append(4)
      list.append(5)

      let val = list.pop()
      expect(list.size).toBe(1)
      expect(val).toBe(5)

      val = list.pop()
      expect(list.size).toBe(0)
      expect(val).toBe(4)
    })
  })

  test("clear", () => {
    list.append(4)
    list.clear()
    expect(list.head).toBeNull()
  })

  describe("toString", () => {
    test("Empty list", () => {
      expect(list.toString()).toBe("null")
    })

    test("Non-empty list", () => {
      list.append(4)
      expect(list.toString()).toBe("4 -> null")
    })
  })
})
