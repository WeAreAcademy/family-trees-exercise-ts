import { countNumberOfPeeps, countNumberOfPeeps2, logAllPeopleInTree, logAllPeopleInTreeWithQueue } from './treeLogging'
import { createStarkTree } from './families/stark'
import { createBaratheonTree } from './families/baratheon';

const starks = createStarkTree();
const expectedStarks = ["Rickard", "Benjen", "Lyanna", "Eddard", "Brandon", "Rickon", "Bran", "Arya", "Sansa", "Robb", "Jon"]
const baratheon = createBaratheonTree()

describe("Suite of tests for logAllPeopleInTree", () => {
    test("names returned", () => {
        expect(logAllPeopleInTree(starks)).toStrictEqual(expectedStarks)
    })
})


describe("Suite of tests for logAllPeopleInTreeWithQueue", () => {
    test("names returned", () => {
        expect(logAllPeopleInTreeWithQueue(starks)).toStrictEqual(expectedStarks)
    })
})

describe("suite of tests for counting people in tree", () => {
    test("counter number of peep", ()=>{
        expect(countNumberOfPeeps(starks)).toStrictEqual(11)
        expect(countNumberOfPeeps(baratheon)).toStrictEqual(10)
    });
    test("counter number of peeps 2", () => {
        expect(countNumberOfPeeps2(starks)).toStrictEqual(11);
        expect (countNumberOfPeeps2(baratheon)).toStrictEqual(10)
    })
})