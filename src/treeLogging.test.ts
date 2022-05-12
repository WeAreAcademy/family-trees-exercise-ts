import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from './treeLogging'
import { createStarkTree } from './families/stark'

const starks = createStarkTree();
const expectedStarks = ["Rickard", "Benjen", "Lyanna", "Eddard", "Brandon", "Rickon", "Bran", "Arya", "Sansa", "Robb", "Jon"]

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