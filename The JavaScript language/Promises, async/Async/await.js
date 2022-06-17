// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

async function loadJson(url) {
    let response = await fetch(url)
        if (response.status == 200) {
          let jsonObject = await response.json()
          return jsonObject
        } else {
            throw new Error("Whoops")
        }
      };
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404

//////////////////////////////////////////////////////
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url)
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    };


// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  try {
    let name = prompt("Enter a name?", "iliakan");
    let response = await loadJson(`https://api.github.com/users/${name}`)
    let user = response.text()
    alert(`Full name: ${user.name}.`);
  }catch(err){
    if (err instanceof HttpError && err.response.status == 404) {
     alert("No such user, please reenter.");
  }
}
}  
demoGithubUser()

    ////////////////////////////

    async function wait() {
      await new Promise(resolve => setTimeout(resolve, 1000));
    
      return 10;
    }
    
    function f() {
      // ...what should you write here?
      alert(wait())
      // we need to call async wait() and wait to get 10
      // remember, we can't use "await"
    }
    f()