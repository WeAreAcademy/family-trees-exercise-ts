//ignore this
import { AsciiTree } from "oo-ascii-tree";
import { Person } from "../personTypes";

export function printPersonTreeAsAscii(person: Person): void {
  printAsciiTree(personTreeToAsciiTree(person));
}

export function personTreeToAsciiTree(person: Person): AsciiTree {
  const tree = new AsciiTree(person.name);
  const kids = person.children.map((kid) => personTreeToAsciiTree(kid));
  tree.add(...kids);
  return tree;
}

export function printAsciiTree(asciiTree: AsciiTree): void {
  asciiTree.printTree();
}

export function demoAsciiTree() {
  const tree = new AsciiTree("root");

  tree.add(new AsciiTree("child1"));

  tree.add(
    new AsciiTree(
      "child2",
      new AsciiTree("grandchild1"),
      new AsciiTree("grandchild2"),
    ),
  );

  tree.add(new AsciiTree("child3"));

  tree.printTree();
}
