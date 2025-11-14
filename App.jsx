import { useEffect, useState } from "react";

import HelloWorld from "./HelloWorld";

function App() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggle}>
        {show ? "Hide Hello World" : "Show Hello World"}
      </button>

      {show && <HelloWorld />}
    </div>
  );
}

export default App;

