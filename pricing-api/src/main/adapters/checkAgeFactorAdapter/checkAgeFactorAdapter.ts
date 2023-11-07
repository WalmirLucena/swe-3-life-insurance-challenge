import { ICheckAgeProvider } from '@data/protocols/providers/ICheckAgeFactorProvider';
import { NodeBinarySearch } from './NodeBinarySearch';

const DATA = [
  {
    age: 18,
    factor: 0.75,
  },
  {
    age: 19,
    factor: 0.8,
  },
  {
    age: 20,
    factor: 1,
  },
  {
    age: 22,
    factor: 1.25,
  },
  {
    age: 25,
    factor: 1.5,
  },
  {
    age: 30,
    factor: 1.75,
  },
  {
    age: 35,
    factor: 2,
  },
  {
    age: 40,
    factor: 2.5,
  },
  {
    age: 50,
    factor: 3,
  },
  {
    age: 60,
    factor: 4,
  },
];

class CheckAgeFactorAdapter implements ICheckAgeProvider {
  root: NodeBinarySearch | null;

  constructor() {
    this.root = null;
  }

  insert(age: number, factor: number) {
    const newNode = new NodeBinarySearch(age, factor);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: NodeBinarySearch, newNode: NodeBinarySearch) {
    if (newNode.age < node.age) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  findFactor(age: number) {
    return this.findFactorNode(this.root, age);
  }

  findFactorNode(node: NodeBinarySearch, age: number) {
    if (node === null) {
      return null;
    }
    if (age < node.age) {
      const leftFactor = this.findFactorNode(node.left, age);
      return leftFactor !== null ? leftFactor : node.factor;
    }
    if (age > node.age) {
      const rightFactor = this.findFactorNode(node.right, age);
      return rightFactor !== null ? rightFactor : node.factor;
    }
    return node.factor;
  }

  execute(age: number): number {
    const bst = new CheckAgeFactorAdapter();
    DATA.forEach(item => {
      bst.insert(item.age, item.factor);
    });

    return bst.findFactor(age);
  }
}

export { CheckAgeFactorAdapter };
