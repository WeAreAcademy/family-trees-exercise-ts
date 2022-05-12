import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    let peopleStack: Person[] = []
    peopleStack.push(topPerson)
    let counter = 1
    while(peopleStack.length > 0){
        const person = peopleStack.pop()
        if (person){
            console.log(`Person ${counter}: `, person.name)
            counter ++
            for (const child of person.children){
                peopleStack.push(child)
            }
        }
    }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    let peopleStack: Person[] = []
    peopleStack.push(topPerson)
    let counter = 1
    while(peopleStack.length > 0){
        console.log(`Person ${counter} : `, peopleStack[0].name)
        counter ++
        for (const child of peopleStack[0].children){
            peopleStack.push(child)
        }
        peopleStack.shift()
    }
}



/*
A stack data structure is an ordered collection of items (in this case Person objects) which can be altered in 
only two ways: 

- the “top” item can be removed
- an item can be placed on “top” of the stack

It’s normally also possible to check if it is empty, without trying to remove the top item.


PSEUDOCODE FOR logAllPeopleInTreeWithQueue
Inputs : TOP-PERSON (Person)
Returns : void

set PEOPLE-STACK as an empty array
add TOP-PERSON into PEOPLE-STACK

while PEOPLE-STACK is not empty do
    log out the name of the person in the first element of PEOPLE-STACK
    for any CHILD of the person in the first element of PEOPLE-STACK do
        add CHILD to the end of PEOPLE-STACK
    end for
    remove first element from PEOPLE-STACK
end while
*/



/* OLD PSEUDOCODE

function logAllPeopleInTree(topPerson)
    create an empty stack of People
    put the topPerson onto the top of this new stack

		repeat the following as long as the stack is not empty:
		    take the top person from the stack
				console log their name
        add their kids to the top of the stack of people (in any order)

*/