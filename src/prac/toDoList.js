import { useState } from "react";

function App() {
  const [toDo, SetToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChage = (event) => SetToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } else {
      SetToDo("");
      setToDos((currentArray) => [toDo, ...currentArray]);
    }
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChage}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
