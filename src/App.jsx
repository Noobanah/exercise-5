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

function validate(field, value){
  switch(field){
    case "name": 
      return value.trim() ? "" : "Name is required"
    case "email":
      return value.includes("@") && value.endsWith(".com")
      ? ""
      : "Email must contain '@' and end with .com";
    default:
      return ""
  }
}

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const { field, value } = action.payload;
      const errorMessage = validate(field, value);

      return {
        ...state,
        [field]: value,
        errors: {
          ...state.errors,
          [field]: errorMessage
        }
      };
    }

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(formReducer, initialState)


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: name, value }
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>📝 Form with Real-Time Validation</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        {state.errors.name && (
          <div style={{ color: "red" }}>{state.errors.name}</div>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        {state.errors.email && (
          <div style={{ color: "red" }}>{state.errors.email}</div>
        )}
      </div>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
