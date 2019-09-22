PRESENTATION: https://docs.google.com/presentation/d/1Kua0l4sS-RWstAyp7YMNYUg49G67CX0OAX8zoVFf-lg/edit#slide=id.p

BACKEND: https://github.com/JoinCODED/RJSDemo4-To-do-list-BackEnd

1. Run the backend - show it working with postman

2. install axios and import it

   ```bash
   yarn add axios
   ```

   ```javascript
   import axios from "axios";
   ```

3. Create and use your state

   ```jsx
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

4. In `render()` add call axios. Return Promise:

   ```jsx
   let asynCall = axios.get("http://127.0.0.1:8000/api/list/");
   console.log("Axios returned: ", asynCall);
   ```

5. Demo `async/await` and log the response object THEN log `res.data`:

   ```jsx
   async render() {
     ...
     const response = await axios.get("http://127.0.0.1:8000/api/list/")
     console.log(response);
     ...
   }
   ```

   to

   ```jsx
   async render() {
     ...
     const response = await axios.get("http://127.0.0.1:8000/api/list/")
     const data = response.data
     console.log(data);
     ...
   }
   ```

   to

   ```jsx
   async render() {
     ...
     const response = await axios.get("http://127.0.0.1:8000/api/list/");
     const tasks = response.data;
     console.log(tasks);
     ...
   }
   ```

6. Switch off the API to cause an error. Add a `try/catch`:

   ```jsx
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

7. Add `setState`. Show this breaking the app!

   ```jsx
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

8. Add `componentDidMount()`:

   ```jsx
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
