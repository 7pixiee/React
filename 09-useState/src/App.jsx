import { useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function restart() {
    setNum(0);
  }

  const [object, setObject] = useState({ user: "Aisha", age: 20 });

  const changeObject = () => {
    setObject(prev=> ({...prev,user:"Pixie"}))
  };

  const [arr, setArr] = useState([1, 2, 3, 4])

  const changeArr = ()=> {
    const newArr = [...arr];
    newArr.push(5);

    setArr(newArr)
  }

  return (
    <div>
      <div className="page1">
        <h1 className="count">{num}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <br />
        <button className="restart" onClick={restart}>
          ↻
        </button>
      </div>

      <div className="page2">
      <h1>
        {object.user}'s age is {object.age}.
      </h1>
      <button onClick={changeObject}>Change Username</button>

      <h1>{arr}</h1>
<button onClick={changeArr}>Add 5</button>
      </div>
    </div>
  );
};

export default App;
