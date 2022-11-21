import "./App.css";
import { InicialCard } from "./components/indexCard/index.jsx";
import { HomeNoCard } from "./pages/index.jsx";
import { Header } from "../src/components/header/index.jsx";

function App() {
  return (
    <div className="App">
      if (true) {<InicialCard />}else{<HomeNoCard />}
    </div>
  );
}
export default App;
