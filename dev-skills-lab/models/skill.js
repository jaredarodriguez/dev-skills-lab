const skill = [
  { skill: "Javascript", done: false },
  { skill: "CSS", done: false },
  { skill: "HTML", done: false }
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  return skill[id];
}
function getAll() {
  return skill;
}
