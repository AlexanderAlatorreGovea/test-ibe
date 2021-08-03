const mongoose = require("mongoose");

mongoose
  .connect("mongodb::/localhost/playground")
  .then(() => console.log("connected to Mongodb"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 233 },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node.js Course",
    author: "Mosh",
    tags: ["node", "backend"],
    category: '-',
    isPublished: true,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
      for(field in err.errors) {
        console.log(err.errors[field].message);
      }
  }
}

async function getCourses() {
  const pageNum = 2;
  const pageSize = 10;
  //api/course?pageNumber=2&pageSize=10

  const courses = await Course.find({
    author: "Mosh",
    isPublished: true,
    price: { $gte: 10, $let: 20 },
  })
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize)
    .sort({
      name: 1,
    })
    .select({
      name: 1,
      tags: 1,
    })
    .count();
}

async function updateCourse(id) {
  //query first
  //findById()
  //modify its property
  //save()
  const result = Course.update(
    {
      _id: id,
    },
    {
      $set: {
        author: "Mosh",
        isPublished: false,
      },
    },
    {
      new: true,
    }
  );

  console.log(result);
}

async function removeCourse(id) {
  const result = await Course.deleteOne({
    _id: id,
  });

  co;

  console.log(result);
}

createCourse();
