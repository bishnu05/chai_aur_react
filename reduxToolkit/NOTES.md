#React-redux & #Redux-toolkit

1. create a store folder & inside create a store file.
2. Inside store file import configureStore from reduxjs toolkit
3. export store = configureStore({}) like this.
4. create a folder just the name here features, inside another folder, name is todo inside todoSlice.js file
5. in this we just write a initial state & createSlice method. iside this method we have naming convension like name, initialState, & reducers.
6. inside reducers function we have properties & fuction.like we write addTodo, removeTodo, updateTodo,toggleTodo fuction. addTodo, removeTodo this method have state & action.
7. Like addTodo function we just write a variale like i write todo = {id:nanoid(),text:action.payload}
then we push the data in the state. so just write state.todos.push(todo);
same as removeTodo. Just like we write logic in context api
8.after that export all the functionlity like addTodo, removeTodo = todoSlice.actions.
export default todoSlice.reducer.
export all things like export reducer & all functionlity method individually.
9. import that todoReducer from the todoSlice file & use this inside the configureStore({}) as a key value pair.
reducer:todoReducer
10.just we create two files addTodo & TodosList.
11. just we write the addTodo functionlity in the AddTodo.js file.
12. Dispatch reducers ko use karte huye store ke ader value me changes karte hain.
13. when we use callback -> jab imideate execute karna nhi hai tab humko callback lagana padega, warna woh imedeate execute ho jayega,

