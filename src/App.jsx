import { InicialCard } from "./components/indexCard/index.jsx";
import { HomeNoCard } from "./pages/index.jsx";
import { Header } from "../src/components/header/index.jsx";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [isLanding, setIsLanding] = useState(true);
  return (
    <div className="App">
      {isLanding ? (
        <InicialCard setIsLanding={setIsLanding} />
      ) : (
        <HomeNoCard
          setIsLanding={setIsLanding}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}
export default App;
