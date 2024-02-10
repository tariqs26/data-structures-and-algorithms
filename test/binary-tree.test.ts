import { describe, it, beforeEach } from "node:test"
import { strictEqual } from "node:assert"
import { Tree, TreeNode, depth, size, search } from "../src/binary-tree"

describe("Binary Tree module", () => {
  let tree: Tree<number>

  beforeEach(() => {
    tree = new Tree()
  })

  it("depth", () => {
    strictEqual(depth(tree.root), 0)
    tree.root = new TreeNode(4, new TreeNode(5))
    strictEqual(depth(tree.root), 2)
  })

  it("size", () => {
    strictEqual(size(tree.root), 0)
    tree.root = new TreeNode(4, new TreeNode(5), new TreeNode(6))
    strictEqual(size(tree.root), 3)
  })

  it("search", () => {
    strictEqual(search(tree.root, 4), false)
    tree.root = new TreeNode(4, new TreeNode(5), new TreeNode(6))
    strictEqual(search(tree.root, 4), true)
    strictEqual(search(tree.root, 5), true)
    strictEqual(search(tree.root, 6), true)
  })
})
