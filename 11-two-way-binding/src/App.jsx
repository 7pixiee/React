import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  function submitForm(e) {
    e.preventDefault();
    console.log("Form submitted by", title);
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
