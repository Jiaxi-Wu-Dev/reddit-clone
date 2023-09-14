import { useState } from "react";
import SearchNavAppBar from "./components/Appbar/SearchNavAppBar/SearchNavAppBar";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchNavAppBar />
      <Homepage />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
