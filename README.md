PRESENTATION: https://docs.google.com/presentation/d/1Kua0l4sS-RWstAyp7YMNYUg49G67CX0OAX8zoVFf-lg/edit#slide=id.p

1. install axios and import it

   ```bash
   yarn add axios
   ```

````
 ```javascript
 import axios from "axios";
````

2. Create and use your state

```javascript
constructor(props) {
  super(props);
  this.state = {
    tasksFromAPI: []
  };
}
...
render() {
  ...
  <ToDoList tasks={this.state.tasksFromAPI} />
  ...
}
```

3. In `render()` add call axios. Return Promise:

```javascript
let asynCall = axios.get("http://127.0.0.1:8000/api/list/");
console.log("Axios returned: ", asynCall);
```

4. Demo `.then` and log the response object THEN log `res.data`:

```javascript
axios
  .get("http://127.0.0.1:8000/api/list/")
  .then(() => alert("SUCCESS"!!!));

// To show that it's async
console.log("I run first!");
```

to

```javascript
axios.get("http://127.0.0.1:8000/api/list/").then(res => console.log(res));
```

to

```javascript
axios.get("http://127.0.0.1:8000/api/list/").then(res => console.log(res.data));
```

5. Switch off the API to cause an error. Add a `.catch`:

```javascript
axios
  .get("http://127.0.0.1:8000/api/list/")
  .then(res => console.log(res.data))
  .catch(err => console.error("SOMETHING WENT WRONG: " + err));
```

6. Add `setState`. Show this breaking the app!

```javascript
axios
  .get("http://127.0.0.1:8000/api/list/")
  .then(res => res.data)
  .then(tasksFromAPI => this.setState({ tasksFromAPI: tasksFromAPI }))
  .catch(err => console.error("SOMETHING WENT WRONG: " + err));
```

7. Add `componentDidMount()`:

```javascript
componentDidMount() {
  axios
    .get("http://127.0.0.1:8000/api/list/")
    .then(res => res.data)
    .then(tasksFromAPI => this.setState({ tasksFromAPI: tasksFromAPI }))
    .catch(err => console.error("SOMETHING WENT WRONG: " + err));
}
```
