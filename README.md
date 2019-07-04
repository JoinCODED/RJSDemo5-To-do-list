PRESENTATION: https://docs.google.com/presentation/d/1Kua0l4sS-RWstAyp7YMNYUg49G67CX0OAX8zoVFf-lg/edit#slide=id.p

BACKEND: https://github.com/JoinCODED/RJSDemo4-To-do-list-BackEnd

1. install axios and import it

```bash
yarn add axios
```

```javascript
import axios from "axios";
```

2. Create and use your state

```javascript
state = {
  tasksFromAPI: []
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

4. Demo `async/await` and log the response object THEN log `res.data`:

```javascript
async render() {
  ...
  const response = await axios.get("http://127.0.0.1:8000/api/list/")
  console.log(response);
  ...
}
```

to

```javascript
async render() {
  ...
  const response = await axios.get("http://127.0.0.1:8000/api/list/")
  const data = response.data
  console.log(data);
  ...
}
```

to

```javascript
async render() {
  ...
  const response = await axios.get("http://127.0.0.1:8000/api/list/");
  const tasks = response.data;
  console.log(tasks);
  ...
}
```

5. Switch off the API to cause an error. Add a `try/catch`:

```javascript
async render() {
  ...
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/list/");
    const tasks = response.data;
    this.setState({ tasksFromAPI: tasks });
  } catch(error) {
    console.error("SOMETHING WENT WRONG!");
    console.error(error);
  }
  ...
}
```

6. Add `setState`. Show this breaking the app!

```javascript
async render() {
  ...
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/list/");
    const tasks = response.data;
    this.setState({ tasksFromAPI: tasks });
  } catch(error) {
    console.error("SOMETHING WENT WRONG!");
    console.error(error);
  }
  ...
}
```

7. Add `componentDidMount()`:

```javascript
async componentDidMount() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/list/");
      const tasks = response.data;
      this.setState({ tasksFromAPI: tasks });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ");
      console.error(err);
    }
}
```
