import { Person } from "../personTypes";

export function createLannisterTree(): Person {
  //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister

  const cerseiKids: Person[] = [
    { name: "Joffery", children: [] },
    { name: "Myrcella", children: [] },
    { name: "Tommen", children: [] },
  ];

  const tywinKids: Person[] = [
    { name: "Cersei", children: cerseiKids },
    { name: "Ser Jaime", children: [] },
    { name: "Tyroin", children: [] },
  ];

  const tytosKids: Person[] = [
    { name: "Tywin", children: tywinKids },
    { name: "Genna", children: [] },
    { name: "Kevan", children: [] },
    { name: "Tygett", children: [] },
    { name: "Gerion", children: [] },
  ];

  const topPerson3: Person = { name: "Tytos", children: tytosKids };

  return topPerson3;
}
