const App = () => {
  function btnClicked() {
    console.log("Change user");
  }

  const inputChanging = (value) => {
    console.log(value);
  };

  return (
    <div onWheel={(elem)=> {
      console.log(elem.deltaY)
    }}>
      <div className="page1">
        <h1>hello aisha</h1>

        <button onClick={btnClicked}>change user</button>
        <button
          onClick={() => {
            console.log("btn clicked");
          }}
        >
          click
        </button>

        <input
          type="text"
          placeholder="type"
          onChange={(elem) => {
            inputChanging(elem.target.value);
          }}
        />
      </div>

      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
