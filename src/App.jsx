import './App.css';
import { useReducer } from 'react';

const initialState = {
  name: "",
  email: "",
  errors: {
    name: "",
    email: ""
  }
};

function validate(){

}

function formReducer(state, action) {
  switch(action.type){
    case "UPDATE_FIELD":
      return
    case "RESET_FORM":
      return
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(formReducer, initialState)

  function handleReset(){

  }

  function handleChange(){
    console.log(test)
  }

  return (
    <div className="App">
      <p>Test</p>
      <h2>Pull Test</h2>
      <input 
        type="text" 
        name="name"
        onChange={}/>
      <input 
        type="email" 
        email="email"
        onChange={}/>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
