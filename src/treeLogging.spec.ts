import { createBaratheonTree } from "./families/baratheon";
import { Person } from "./personTypes";
import {
  belongsInFamily,
  familySize,
  findPerson,
  isDescendant,
  logAllPeopleInTree,
  logAllPeopleInTreeWithQueue,
} from "./treeLogging";

test("Test a baratheon FILO", () => {
  const expectedResult = [
    "Rhaelle",
    "Steffon",
    "Renly",
    "Stannis",
    "Robert",
    "Bella",
    "Barra",
    "Gendry",
    "Mya",
    "Edric",
  ];
  expect(logAllPeopleInTree(createBaratheonTree())).toStrictEqual(
    expectedResult,
  );
});

test("Test a baratheon FILO", () => {
  const expectedResult = [
    "Rhaelle",
    "Steffon",
    "Robert",
    "Stannis",
    "Renly",
    "Edric",
    "Mya",
    "Gendry",
    "Barra",
    "Bella",
  ];
  expect(logAllPeopleInTreeWithQueue(createBaratheonTree())).toStrictEqual(
    expectedResult,
  );
});

test("familySize returns number of members in a given family", () => {
  expect(familySize(createBaratheonTree())).toBe(10);
});

test("belongToFamily returns true is name belong to a family of Top Person", () => {
  expect(belongsInFamily("Renly", createBaratheonTree())).toBe(true);
  expect(belongsInFamily("Sansa", createBaratheonTree())).toBe(false);
});

test("findPerson can find a name from a family tree of a given topPerson and return its Person object", () => {
  const expectedResult: Person = {
    name: "Stannis",
    children: [],
  };

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
  expect(findPerson("Stannis", createBaratheonTree())).toStrictEqual(
    expectedResult,
  );
  expect(findPerson("Steffon", createBaratheonTree())).toStrictEqual(
    steffon,
  );
});


test("isDecendent return a true if a name is a decendant of an ancester in a family as defined by a topPerson", () => {
    expect(isDescendant("Renly", "Steffon", createBaratheonTree())).toBe(true)
    expect(isDescendant("Sansa", "Steffon", createBaratheonTree())).toBe(false)
})