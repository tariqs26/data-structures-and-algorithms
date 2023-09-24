import { describe, it, beforeEach } from "node:test"
import { strictEqual } from "node:assert"
import { Tree, TreeNode, depth } from "../src/binary-tree"

let tree: Tree<number>

describe("Binary Tree module", () => {
  beforeEach(() => {
    tree = new Tree()
  })
  it("depth", () => {
    strictEqual(depth(tree.root), 0)
    tree.root = new TreeNode(4, new TreeNode(5))
    strictEqual(depth(tree.root), 2)
  })
})
