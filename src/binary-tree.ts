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
