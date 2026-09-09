import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Pixie"
        age={20}
        img="https://tse3.mm.bing.net/th/id/OIP.vueXy-yHkWJFJki8w1KKYgHaIO?
             r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />

      <Card
        user="Lulu"
        age={17}
        img="https://i.redd.it/l1uaygkuyjl21.jpg"
      />
    </div>
  );
};

export default App;
