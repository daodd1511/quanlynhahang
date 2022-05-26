const question = {};
question.Knight = [
  {
    Dialog:
      "Your highness, our hinterlands were attacked by the Hightower’s army.",
    Question: "Do you want to take vengeance and attack their salt depot?",
    Yes: 633,
    No: 337,
    Info: "Salt has played a prominent role in determining the power and location of the world's great cities. Some wars for salt took place in the past.",
  },
  {
    Dialog:
      "The Hightower’s King blocks our way to the sea and we’re losing our resource to make salt. For a little payment, a group of mercenaries could help.",
    Question: "Would you like to hire them? ",
    Yes: 775,
    No: 225,
    Info: "Via Salaria was an ancient roman road used to transport salt from the sea to Rome and other roman cities.",
  },
  {
    Dialog:
      "YSir, as much as I like my job, I am not comfortable with this amount of salt. If you don't pay me the double I will continue my work in another kingdom.",
    Question: "Do you want to pay him the double? ",
    Yes: 100,
    No: 900,
    Info: "In Rome... the soldier's pay was originally salt and the word salary derives from it.",
  },
];
question.CalvinoTheCook = [
  {
    Dialog:
      "Our salt inventories are empty, my Lord. We cannot store our food anymore",
    Question: "Should we keep it anyway? ",
    Yes: 292,
    No: 708,
    Info: "Salt can be used to conserve food.",
  },
  {
    Dialog:
      "We don't have enough sugar to cook the dessert for the banquet, I suggest we cook a salty dessert.",
    Question: "Do you allow him?  ",
    Yes: 619,
    No: 381,
    Info: "Some popular desserts like pretzel chocolate chip cookies and salted rose honey pie are made with salt",
  },
  {
    Dialog:
      "Your highness, I am making bread for the banquet, may I ask a barrel of salt?",
    Question: "Salt for making bread? Would you give him?",
    Yes: 789,
    No: 221,
    Info: "In Rome... the soldier's pay was originally salt and the word salary derives from it.",
  },
];
question.TrustedServant = [
  {
    Dialog:
      "Your majesty, a knight from a kingdom far away is asking for shelter in our walls. It could very well be a spy…",
    Question: "Do you want to let him in?  ",
    Yes: 249,
    No: 751,
    Info: "In ancient kingdoms it was common to send spies to get information on the enemies.",
  },
  {
    Dialog:
      "My Lord, there is a manifestation of citizens outside the castle complaining about the heavy tax on salt..",
    Question: "Would you like to reduce the salt tax?   ",
    Yes: 645,
    No: 355,
    Info: "The common salt tax was of such a high value that it caused mass population shifts and exodus, attracted invaders, and caused wars.",
  },
  {
    Dialog:
      "My King, there is a huge protest at Black Square to demonstrate against the new salt tax...",
    Question: "Would you like to quit this tax? ",
    Yes: 770,
    No: 230,
    Info: "The common salt tax was of such a high value that it caused mass population shifts and exodus, attracted invaders, and caused wars.",
  },
];
export default question;
