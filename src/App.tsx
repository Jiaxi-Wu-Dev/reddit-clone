import SearchNavAppBar from "./components/Appbar/SearchNavAppBar/SearchNavAppBar";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <SearchNavAppBar />
      <Homepage />
    </>
  );
}

export default App;
