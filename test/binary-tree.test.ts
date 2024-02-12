import { describe, test, beforeEach, expect } from "vitest"
import {
  Tree,
  TreeNode,
  depth,
  size,
  search,
} from "../src/datastructures/binary-tree"

describe("Binary Tree module", () => {
  let tree: Tree<number>

  beforeEach(() => {
    tree = new Tree()
  })

  test("depth", () => {
    expect(depth(tree.root)).toBe(0)
    tree.root = new TreeNode(4, new TreeNode(5))
    expect(depth(tree.root)).toBe(2)
  })

  test("size", () => {
    expect(size(tree.root)).toBe(0)
    tree.root = new TreeNode(4, new TreeNode(5), new TreeNode(6))
    expect(size(tree.root)).toBe(3)
  })

  test("search", () => {
    expect(search(tree.root, 4)).toBe(false)
    tree.root = new TreeNode(4, new TreeNode(5), new TreeNode(6))
    expect(search(tree.root, 4)).toBe(true)
    expect(search(tree.root, 5)).toBe(true)
    expect(search(tree.root, 6)).toBe(true)
  })
})
