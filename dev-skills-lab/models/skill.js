const skill = [
  { skill: "Javascript", done: false },
  { skill: "CSS", done: false },
  { skill: "HTML", done: false }
];

module.exports = {
  getAll
};

function getAll() {
  return skill;
}
