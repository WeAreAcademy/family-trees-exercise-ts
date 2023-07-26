import { Person } from "../personTypes";

export function createBaratheonTree(): Person {
  // https://en.wikipedia.org/wiki/Template:Family_tree_of_House_Baratheon

  // Note: Proper family "trees" are not trees in computer science, as their nodes have more than one parent.
  // For simplicity, in the data here, each child has only one parent represented.

  const robertsKids: Person[] = [
    { name: "Edric", children: [] },
    { name: "Mya", children: [] },
    { name: "Gendry", children: [] },
    { name: "Barra", children: [] },
    { name: "Bella", children: [] },
  ];

  const steffonsKids: Person[] = [
    { name: "Robert", children: robertsKids },
    { name: "Stannis", children: [] },
    { name: "Renly", children: [] },
  ];

  const steffon: Person = { name: "Steffon", children: steffonsKids };

  const topPerson: Person = { name: "Rhaelle", children: [steffon] };

  return topPerson;
}
