const questions = [
  {
    id: 1,
    question: "question 1",
    order:1,
    options: [
      { id: 1, option: "option 1.1" , value : 0 },
      { id: 2, option: "option 1.2 *" , value : 1},
      { id: 3, option: "option 1.3" , value : 0},
    ],
  },
  {
    id: 2,
    question: "question 2",
    order:2,
    options: [
      { id: 1, option: "option 2.1 *" , value : 1 },
      { id: 2, option: "option 2.2" , value : 0 },
    ],
  },
  {
    id: 3,
    question: "question 2",
    order:3,
    options: [
      { id: 1, option: "option 3.1" , value :0 },
      { id: 2, option: "option 3.2" , value : 0 },
      { id: 3, option: "option 3.3 *" , value : 1},
    ],
  },
];

export { questions}