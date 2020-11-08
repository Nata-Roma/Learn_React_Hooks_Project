import ReactDOM from "react-dom";

let values = [];
let currentHook = 0;

export const useState = (initialState) => {
  if (typeof values[currentHook] === "undefined")
    values[currentHook] = initialState;

  let hookIndex = currentHook;
  const setState = (newValue) => {
    values[hookIndex] = newValue;
    ReactDOM.render(<App />, document.getElementById("root"));
  };

  return [values[currentHook++], setState];
};
