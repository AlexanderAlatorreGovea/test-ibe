//callbacks that are asynchronous
getUser(1, function (user) {
  getRepos(user.githubname, (repos) => {
      console.log(repos)
  })
});

function getUser(id, callback) {
  setTimeout(() => {
    callback({
      id: id,
      githubname: "alex",
    });
  }, 100);
}

getRepos("alex", function (repos) {
  console.log("repos", repos);
});

function getRepos(username, callback) {
  setTimeout(() => {
    callback([
        "repo1", 
        "repo2", 
        "repo2"
    ]);
  }, 200);
}
