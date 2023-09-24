export class TreeNode<T> {
  constructor(
    public val: T,
    public left: TreeNode<T> | null = null,
    public right: TreeNode<T> | null = null
  ) {}
}

export class Tree<T> {
  root: TreeNode<T> | null
  constructor() {
    this.root = null
  }
}

export function depth(root: TreeNode<unknown> | null): number {
  if (!root) return 0
  return 1 + Math.max(depth(root.right), depth(root.left))
}

export function size(root: TreeNode<unknown> | null): number {
  if (!root) return 0
  return 1 + size(root.left) + size(root.right)
}

export function search<T>(root: TreeNode<T> | null, val: T): boolean {
  if (!root) return false
  return root.val === val || search(root.left, val) || search(root.right, val)
}
