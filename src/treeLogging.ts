import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const peopleStack: Person[] = []
    peopleStack.push(topPerson)
    while(peopleStack.length > 0){
        console.log("Person: ", peopleStack[0].name)
        for (const child of topPerson.children){
            peopleStack.push(child)
        }
        peopleStack.shift()
    }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}



/*
A stack data structure is an ordered collection of items (in this case Person objects) which can be altered in 
only two ways: 

- the “top” item can be removed
- an item can be placed on “top” of the stack

It’s normally also possible to check if it is empty, without trying to remove the top item.

function logAllPeopleInTree(topPerson)
    create an empty stack of People
    put the topPerson onto the top of this new stack

		repeat the following as long as the stack is not empty:
		    take the top person from the stack
				console log their name
        add their kids to the top of the stack of people (in any order)

*/