import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const eddardsKids: Person[] = [
    { name: "Rickon", children: [] },
    { name: "Bran", children: [] },
    { name: "Arya", children: [] },
    { name: "Sansa", children: [] },
    { name: "Robb", children: [] },
    { name: "Jon", children: [] },
  ];

  const richardsKids: Person[] = [
    { name: "Benjen", children: [] },
    { name: "Lyanna", children: [] },
    { name: "Eddard", children: eddardsKids },
    { name: "Brandon", children: [] },
  ];

  const topPerson2: Person = { name: "Richard", children: richardsKids };

  return topPerson2;
}
