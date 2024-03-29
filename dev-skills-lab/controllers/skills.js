var Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create
};

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect("/skills");
}
function newSkill(req, res) {
  res.render("skills/new");
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    time: req.time
  });
}
