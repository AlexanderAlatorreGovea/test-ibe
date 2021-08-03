//Promise.all returns an array with all the
//async operations
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async operation 1..");
    resolve(1);
    //reject(new Error("something failed"));
  }, 100);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("async operation 2...");
    resolve(2);
  }, 200);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
