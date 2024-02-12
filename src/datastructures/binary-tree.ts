export class TreeNode<T> {
  constructor(
    public data: T,
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

export function depth<T>(root: TreeNode<T> | null): number {
  if (!root) return 0
  return 1 + Math.max(depth(root.right), depth(root.left))
}

export function size<T>(root: TreeNode<T> | null): number {
  if (!root) return 0
  return 1 + size(root.left) + size(root.right)
}

export function search<T>(root: TreeNode<T> | null, data: T): boolean {
  if (!root) return false
  return (
    root.data === data || search(root.left, data) || search(root.right, data)
  )
}
