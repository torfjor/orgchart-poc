import { Node } from "./types";

export function findParent(id: string, tree: Node) {
  function search(node: Node): Node | undefined {
    if (!node.children) return undefined;
    for (let child of node.children) {
      if (child.id === id) return node;

      let found = search(child);
      if (found) return found;
    }
  }
  return search(tree);
}
