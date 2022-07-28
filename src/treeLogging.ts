import { Person } from "./personTypes";

/*
FUNCTION: logAllPeopleInTree
PARAMS: topPerson: Person
RETURNS: VOID
----
DECLARE stackArr: ARRAY OF PERSON = []
stackArr.PUSH(topPerson)

WHILE (stackArr.LENGTH > 0)
  DECLARE topPerson = stackArr.POP
  PRINT(topPerson)
  FOR (child IN topPerson.children)
    stackArr.PUSH(child)
  ENDFOR
ENDWHILE
----
*/

export function logAllPeopleInTree(topPerson: Person): string[] {
  const stackArr: Person[] = [];
  const arrFamily: string[] = [];
  stackArr.push(topPerson);

  while (stackArr.length > 0) {
    const topPerson = stackArr.pop();
    if (topPerson) {
      arrFamily.push(topPerson.name);
      topPerson.children.forEach((child) => stackArr.push(child));
    }
  }
  return arrFamily;
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const stackArr: Person[] = [];
  const arrFamily: string[] = [];
  stackArr.unshift(topPerson);

  while (stackArr.length > 0) {
    const topPerson = stackArr.pop();
    if (topPerson) {
      arrFamily.push(topPerson.name);
      topPerson.children.forEach((child) => stackArr.unshift(child));
    }
  }
  return arrFamily;
}

export const familySize = (topPerson: Person): number => {
  const familyArray: string[] = logAllPeopleInTree(topPerson);
  return familyArray.length;
};

export const belongsInFamily = (name: string, topPerson: Person): boolean => {
  const familyArray: string[] = logAllPeopleInTree(topPerson);
  return familyArray.includes(name);
};

export const isDescendant = (
  name: string,
  ancester: string,
  topPerson: Person,
): boolean => {
  /*
first find the ancester tree
run anscester: PErson into belongsInFamily
*/

  const foundPerson: Person | undefined = findPerson(ancester, topPerson);
  return !foundPerson ? false : belongsInFamily(name, foundPerson);
};

export const findPerson = (
  name: string,
  topPerson: Person,
): Person | undefined => {
  const stackArr: Person[] = [];
  stackArr.unshift(topPerson);

  while (stackArr.length > 0) {
    const candidate = stackArr.pop();
    if (candidate && candidate.name === name) {
      return candidate;
    }
    candidate ? candidate.children.forEach((c) => stackArr.push(c)) : "";
  }

  return undefined;
};
