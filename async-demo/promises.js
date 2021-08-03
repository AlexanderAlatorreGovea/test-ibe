const p = new Promise((resolve, reject) => {
  //kick off async work

  setTimeout(() => {
    resolve(1); //pending => resolved, fulfilled
    reject(new Error("message")); //pending => rejected
  }, 200);

});

p.then((result) => console.log(result))
    .catch(err => console.log('Error:', err.message))