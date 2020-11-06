import React, { Component, useState } from "react";
import "./styles.css";

const App = () => {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        This is what you are typing:{" "}
        <span style={{ color: "red" }}>{name}</span>
      </h2>
      <input type="text" value={name} onChange={changeHandler} />
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
