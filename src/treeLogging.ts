import { Person } from "./personTypes";
import { createStarkTree } from "./families/stark";

/*function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

	while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
*/

export function logAllPeopleInTree(createStarkTree: Person): void {
  const workStack = [];

  console.log("First person is " + createStarkTree.name);
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  console.log("TODO!  First person is " + topPerson.name);
}
