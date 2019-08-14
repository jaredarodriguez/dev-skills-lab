const skills = [
  { skill: "Javascript", done: false },
  { skill: "CSS", done: false },
  { skill: "HTML", done: false }
];

module.exports = {
  getAll,
  getOne,
  create
};

function create(skill) {
  skills.push(skill);
}
function getOne(id) {
  return skills[id];
}
function getAll() {
  return skills;
}
