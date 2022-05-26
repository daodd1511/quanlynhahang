import question from "../../model/question.js";
const QuestionService = {};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
QuestionService.Random = () => {
  let data = [];
  for (let key in question) {
    data.push(key + ": " + question[key][getRandomInt(3)].Question);
  }
  return shuffle(data);
};
export default QuestionService;
