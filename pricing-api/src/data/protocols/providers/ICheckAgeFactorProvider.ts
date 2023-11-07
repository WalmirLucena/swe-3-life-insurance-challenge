import { NodeBinarySearch } from '@main/adapters/checkAgeFactor/NodeBinarySearch';

interface ICheckAgeProvider {
  execute(age: number): number;
  findFactorNode(node: NodeBinarySearch, age: number): NodeBinarySearch;
  insertNode(node: NodeBinarySearch, newNode: NodeBinarySearch): void;
  insert(age: number, factor: number): void;
  findFactor(age: number): () => NodeBinarySearch;
}
export { ICheckAgeProvider };
