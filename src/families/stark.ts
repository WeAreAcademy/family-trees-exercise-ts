import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const eddardsChildren: Person[] = [
        {name: "Rickon", children: []},
        {name: "Bran", children: []},
        {name: "Arya", children: []},
        {name: "Sansa", children: []},
        {name: "Robb", children: []},
        {name: "Jon", children: []},
    ] 

    const rickardsChildren: Person[] = [
        {name: "Benjen", children: []},
        {name: "Lyanna", children: []},
        {name: "Eddard", children: eddardsChildren},
        {name: "Brandon", children: []}
    ]

    const topPerson: Person = {name: "Rickard", children: rickardsChildren}
    return topPerson;
}