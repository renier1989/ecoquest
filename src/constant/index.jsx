const questions = [
  {
    id: 1,
    question: "When you leave a room, what do you do with the lights?",
    order: 1,
    options: [
      { id: 1, option: "Leave the lights on" , value : 0 },
      { id: 2, option: "Turn off the lights" , value : 1 },
    ],
  },
  {
    id: 2,
    question: "How do you commute to work/school?",
    order: 2,
    options: [
      { id: 1, option: "Use public transportation, walk, or bike" , value : 1 },
      { id: 2, option: "Drive alone in a car" , value : 0 },
    ],
  },
  {
    id: 3,
    question: "What type of bag do you use for shopping?",
    order: 3,
    options: [
      { id: 1, option: "Plastic bags" , value : 0 },
      { id: 2, option: "Reusable cloth bag" , value : 1 },
    ],
  },
  {
    id: 4,
    question: "How often do you eat meat?",
    order: 4,
    options: [
      { id: 1, option: "Regularly, multiple times a week" , value : 0 },
      { id: 2, option: "Rarely or never" , value : 1 },
    ],
  },
  {
    id: 5,
    question: "How do you manage food waste?",
    order: 5,
    options: [
      { id: 1, option: "Composting food scraps" , value : 1 },
      { id: 2, option: "Throwing food scraps in the regular trash" , value : 0 },
    ],
  },
  {
    id: 6,
    question: "How do you regulate indoor temperature?",
    order: 6,
    options: [
      { id: 1, option: "Keeping the thermostat high and using air conditioning or heating excessively" , value : 0 },
      { id: 2, option: "Using a programmable thermostat and wearing appropriate clothing" , value : 1 },
    ],
  },
  {
    id: 7,
    question: "How often do you buy bottled water?",
    order: 7,
    options: [
      { id: 1, option: "Frequently, I buy bottled water" , value : 0 },
      { id: 2, option: "Rarely or never, I use a reusable water bottle" , value : 1 },
    ],
  },
  {
    id: 8,
    question: "How do you dispose of electronic waste (e-waste)?",
    order: 8,
    options: [
      { id: 1, option: "Take it to an e-waste recycling center" , value : 1 },
      { id: 2, option: "Throw it in the regular trash" , value : 0 },
    ],
  },
  {
    id: 9,
    question: "What do you do with items you no longer need?",
    order: 9,
    options: [
      { id: 1, option: "Donate or recycle them" , value : 1 },
      { id: 2, option: "Throw them away" , value : 0 },
    ],
  },
  {
    id: 10,
    question: "How do you use appliances when they're not in use?",
    order: 10,
    options: [
      { id: 2, option: "Keep them plugged in and on standby" , value : 0 },
      { id: 1, option: "Unplug them or use smart power strips" , value : 1 },
    ],
  },
];


export { questions}