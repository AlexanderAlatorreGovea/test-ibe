const express = require("express");
const Joi = require("joi");
const app = express();
const logger = require("./middleware/logger");
const authenticate = require("./middleware/authenticate");
const helment = require("helmet");
const config = require("config");
const startyoDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')



config.get("name");
config.get("name.host");
config.get("mail.password");

process.env.NODE_ENV;
app.get("env");

//middleware functions from express
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(static("public"));
app.use(helment);
//custom midleware functions
app.use(logger);
app.use(authenticate);
if (app.get("env" === "development")) {
  app.use(morgan("tiny"));
  startyoDebugger('debugger')
}


const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("resourse not found");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  //look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("resourse not found");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("resourse not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  // will return
  //from http://localhost:5000/api/posts/2019/1
  // // {
  // //     "year": "2019",
  // //     "month": "1"
  // // }
  res.send(req.params);
});

app.get("/api/posts/param", (req, res) => {
  //query string parameter to provide required data
  //?sortBy=name
  //returns
  // {
  //     sortBy: "name"
  // }
  console.log(req.query);
  res.send(req.query);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
