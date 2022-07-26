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
export function logAllPeopleInTree(topPerson: Person): void {
  const stackArr: Person[] = [];
  stackArr.push(topPerson);

  while (stackArr.length > 0) {
    const topPerson = stackArr.pop();
    console.log(topPerson?.name);
    topPerson?.children.forEach((child) => stackArr.push(child));
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  const stackArr: Person[] = [];
  stackArr.unshift(topPerson);

  while (stackArr.length > 0) {
    const topPerson = stackArr.pop();
    console.log(topPerson?.name);
    topPerson?.children.forEach((child) => stackArr.unshift(child));
  }
}
