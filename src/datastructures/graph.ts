import { Stack } from "./stack-array"

export class UndirectedGraph implements Graph {
  protected adj: AdjacencyList = {}
  constructor(n: number = 0) {
    for (let i = 0; i < n; i++) this.adj[i] = []
  }

  adjacentNodes(node: number) {
    return this.adj[node] ?? []
  }

  connected(node1: number, node2: number): boolean {
    return this.adjacentNodes(node1).includes(node2)
  }

  addNode(): void {
    this.adj[this.size()] = []
  }

  addEdge(node1: number, node2: number): void {
    if (!this.adjacentNodes(node2).includes(node1)) {
      this.adj[node1]?.push(node2)
      this.adj[node2]?.push(node1)
    }
  }

  size(): number {
    return Object.keys(this.adj).length
  }

  get adjacencyList(): AdjacencyList {
    return this.adj
  }
}

export class DirectedGraph extends UndirectedGraph {
  connected(node1: number, node2: number): boolean {
    return (
      this.adjacentNodes(node1).includes(node2) &&
      this.adjacentNodes(node2).includes(node1)
    )
  }

  addEdge(node1: number, node2: number): void {
    if (!this.adjacentNodes(node1).includes(node2)) this.adj[node1]?.push(node2)
  }
}
