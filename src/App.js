import React,{ useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [operators, setOperators] = useState([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."]);
  const [scientificCalc, setScientificCalc] = useState(false);
  const [calcBackgroundMode, setCalcBackgroundMode] = useState(false);
  const [displayScientificOptions, setDisplayScientificOptions] = useState("none");
  const calcBtns = [];
 
  operators.forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  function toggleCalcMode()
  {
     if(scientificCalc ==  true)
     {
       setScientificCalc(false);
       setDisplayScientificOptions("none");
       
     }
     else
     {
       setScientificCalc(true);
       setDisplayScientificOptions("block");
     }
  }
  function toggleCalcBackgroundMode()
  {
     let x = document.querySelectorAll("button");
     if(calcBackgroundMode ==  true)
     {
       setCalcBackgroundMode(false);
       document.body.style.backgroundColor = "#fff";
       document.getElementById("inputText").style.color = "#000"
       x.forEach((item) => {
         item.style.color = "#000"
         item.style.backgroundColor = "#f0f0f0"
       })
       
     }
     else
     {
       setCalcBackgroundMode(true);
       document.body.style.backgroundColor = "#000";
       document.getElementById("inputText").style.color = "#fff"
       x.forEach((item) => {
        item.style.color = "#fff"
        item.style.backgroundColor = "#666"
      })
     }
  }

  return (
    <div className="wrapper">
      <button onClick = {toggleCalcMode.bind(this)} >
        {scientificCalc ? "Normal Mode" : "Scientific mode"}
      </button>
      <button onClick = {toggleCalcBackgroundMode.bind(this)} >
        {calcBackgroundMode ? "Normal Theme" : "Dark Theme"}
      </button>
      <div id="inputText" className={`show-input`} >{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>

        <button style={{display: displayScientificOptions}} onClick={(e) => setInput(Math.sqrt(input).toFixed(4))} value="sqrt">
          {" "}
          &#8730;
        </button>

        <button style={{display: displayScientificOptions}} onClick={(e) => setInput((input * input).toFixed(4))} value="square">
          {" "}
          &#13217;
        </button>
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}


export default App;
