import { Person } from "../personTypes";

export function createBritishSuccessionTree(): Person {
  //https://i.redd.it/p3smnr51a7t61.jpg
  return {
    name: "Queen Elizabeth II",
    children: [
      {
        name: "Charles",
        children: [
          {
            name: "William",
            children: [
              { name: "George", children: [] },
              { name: "Charlotte", children: [] },
              { name: "Louis", children: [] },
            ],
          },
          {
            name: "Harry",
            children: [{ name: "Archie", children: [] }],
          },
        ],
      },
      {
        name: "Andrew",
        children: [
          { name: "Beatrice", children: [] },
          {
            name: "Eugenie",
            children: [{ name: "August", children: [] }],
          },
        ],
      },
      {
        name: "Edward",
        children: [
          { name: "James", children: [] },
          { name: "Louise", children: [] },
        ],
      },
      {
        name: "Anne",
        children: [
          {
            name: "Peter",
            children: [
              { name: "Savannah", children: [] },
              { name: "Isla", children: [] },
            ],
          },
          {
            name: "Zara",
            children: [
              { name: "Mia", children: [] },
              { name: "Lena", children: [] },
              { name: "Lucas", children: [] },
            ],
          },
        ],
      },
    ],
  };
}
