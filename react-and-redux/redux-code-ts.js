
************npm install redux
************npm install redux-thunk
************npm install react-redux


######################## first we create reducers -> this is function for 
######################## every state , and will control him

const initial = {type:"",testName:"HTML",arrayOfQuestions: []};


interface question  {
   question: string,
   answer :string [],
   rightAnswer: number
}

export type Action = {
    type:string,
    testName: string,
    arrayOfQuestions: question[]
}



const dataReducer = (state = initial , action:Action) =>{

    switch(action.type){
        case "GET_QUESTENS":
            return{
                ...state,
                testName:action.testName,
                arrayOfQuestions:action.arrayOfQuestions
            }
            default :
            return {
                ...state
            }
    }

}

export default dataReducer;


###################### we will make another exmpl : 

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
      break;
    case "DECREASE":
      return state - 1;
      break;
    default:
      return state;
      break;
  }
};

export default counter;


########################## for combain all reducers and not importing 
########################## every reducer we will put this two reducers in same folder
#############folder reducers -> files : logIn.js , counter.js
#########################now we will create fine #### index.js ####in reducers folder 
######################3## for comabine this to reducers 
/////////////// import first reducer
import counter from "./counter";
/////////////// import second reducer
import isLoggedIn from "./isLoggedIn";
////////////// import tool from redux to comabine all reducers
import { combineReducers } from "redux";


export const allReducers = combineReducers({
  isLoggedInState: isLoggedIn,
  counterState: counter,
});

//// for using typescript we will need to send the type of the reducer 

export type State = ReturnType<typeof allReducers>





########################## in main file index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


//// import allReducers , this hold all reducers , we dont need to wire "./reducers/index" becuse index in the defualt file 
import { allReducers } from "./reducers";


/// this will connect our state to our app
import { Provider } from "react-redux";


///// import create store , object of redux

import thank from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}




const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
  AllReducers,
  composeEnchancer(applyMiddleware(thank))
);

ReactDOM.render(
  <React.StrictMode>
  ///must rap our app with provider , to give the app access to our state
  /// -> store its all our state , inject to the app via provider 
	  <Provider store={store}>
		<App />
	  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);





///////////////////////// now we can use our state in every place in the app
///////////////////////// expmle in the app.js


import React from "react";

//// addin useSelector for show the current state, useDispatch to change the state  
import { useSelector, useDispatch } from "react-redux";



import {State} from './reducers/index';


import {Action} from './reducers/dataReducer';





function App() {
	//// now we select what state we want 
  
  
  //// need to import  action type and state type 
  const questeions:Action = useSelector((state: State) => state.questions);
  
  
  /// this for make changes in state
  const dispatch = useDispatch();
  return (
    <div className="App">
	////////// use the state value 
      <header className="App-header">dddsd{logIn}</header>
	  //// on click this button it will run the function of logIn reducer
	  <button onClick={() => dispatch({ type: "SING_IN" })}>Sing in</button>
	  
    </div>
  );
}

export default App;












