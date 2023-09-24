type AdjacencyList = Record<number, number[]>

interface Graph {
  adjacentNodes(node: number): number[]
  connected(node1: number, node2: number): boolean
  addNode(): void
  addEdge(node1: number, node2: number): void
  size(): number
  get adjacencyList(): AdjacencyList
}