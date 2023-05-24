import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :D");
    return () => console.log("byd :(");
  }, []);
  return <h1>hello!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
