export class NodeBinarySearch {
  age: number;

  factor: number;

  left: null | NodeBinarySearch;

  right: null | NodeBinarySearch;

  constructor(age: number, factor: number) {
    this.age = age;
    this.factor = factor;
    this.left = null;
    this.right = null;
  }
}
