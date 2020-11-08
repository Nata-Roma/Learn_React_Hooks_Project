import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let values = [];
let currentHook = 0;

const useState = (initialState) => {
  if (typeof values[currentHook] === "undefined")
    values[currentHook] = initialState;

  let hookIndex = currentHook;
  const setState = (newValue) => {
    values[hookIndex] = newValue;
    ReactDOM.render(<App />, document.getElementById("root"));
  };

  return [values[currentHook++], setState];
};

const App = () => {
  currentHook = 0;

  const [enableName, setEnableName] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function enableNameChange() {
    setEnableName(!enableName);
  }

  function changeHandler(e) {
    enableName ? setName(e.target.value) : setName("");
  }

  function changeLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        This is what you are typing:{" "}
        {enableName ? <span style={{ color: "red" }}>{name}</span> : ""}
        <span style={{ color: "blue" }}>{lastName}</span>
      </h2>
      <input type="checkbox" value={enableName} onChange={enableNameChange} />
      <input type="text" value={name} onChange={changeHandler} />
      <input type="text" value={lastName} onChange={changeLastName} />
    </div>
  );
};

export default App;

// Refactoring

// class App extends Component {
//   state = {name: ''};

//   changeHandler = (e) => {
//     this.setState({name: e.target.value});
//   }

//   render() {
//     const {name} = this.state;
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>This is what you are typing: <span style={{color: 'red'}}>{name}</span></h2>
//         <input type="text" value={name} onChange={this.changeHandler}/>
//       </div>
//     );
//   }

// }
