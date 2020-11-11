import React, { useContext, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import App from "./App";
import { Provider } from "react-redux";

import TodosContext from "./context";
import todoReducer from "./reducer";
import TodoList from "./components/TodoList";

const store = createStore(rootReducer);
export const UserContext = React.createContext();

const username = "Dave";

// For APPREDUX
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

//For APP using redix via HOOKS
//No need of store
// ReactDOM.render(<App />, document.getElementById("root"));

//For AppReeactViaHooks
//ReactDOM.render(<AppReactViaHooks />, document.getElementById("root"));

//For AppUserContextAndWithReducer
//Here we have send all details of the state wether it is state,dispath or state,setstate, we put it in provider
//and make it global

// const App = () => {
//   const initialState = useContext(TodosContext);
//   const [state, dispatch] = useReducer(todoReducer, initialState); //How u send redux deftails in provider
//   const [count, setCount] = useState(0); //how u send state details in provider

//   return (
//     <TodosContext.Provider value={{ state, dispatch, count, setCount }}>
//       <TodoList />
//     </TodosContext.Provider>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
