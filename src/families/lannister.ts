import { Person } from "../personTypes";

export function createLannisterTree(): Person {

    const cerseiChildren: Person[] = [
        { name: "Joffrey", children: [] },
        { name: "Myrcella", children: [] },
        { name: "Tommen", children: [] }
    ]

    const tywinChildren: Person[] = [
        { name: "Cersei", children: cerseiChildren },
        { name: "Ser Jaime", children: [] },
        { name: "Tyrion", children: [] }
    ]

    const tytosChildren: Person[] = [
        { name: "Tywin", children: tywinChildren },
        { name: "Genna", children: [] },
        { name: "Kevan", children: [] },
        { name: "Tygett", children: [] },
        { name: "Gerion", children: [] }
    ]

    const topPerson: Person = { name: "Tytos", children: tytosChildren };
    return topPerson;
}
