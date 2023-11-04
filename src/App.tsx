import SearchNavAppBar from "./components/Appbar/SearchNavAppBar/SearchNavAppBar";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { useEffect } from "react";
import PreSigninHomepage from "./components/PreSigninHomepage/PreSigninHomepage";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then(console.log);
  });

  return (
    <>
      <PreSigninHomepage />
    </>
  );
}

export default App;
