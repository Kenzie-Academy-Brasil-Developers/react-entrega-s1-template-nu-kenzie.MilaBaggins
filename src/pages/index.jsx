import Header from "../components/header/index.jsx";
import Form from "../components/form/index.jsx";
import "./style.css";
import List from "../components/list/index.jsx";
import TotalMoney from "../components/totalMoney/index.jsx";

export function HomeNoCard({
  setIsLanding,
  listTransactions,
  setListTransactions,
}) {
  return (
    <div className="HomeNoCard">
      <Header setIsLanding={setIsLanding} />
      <div className="HomeNoCard-div">
        <div className="HomeNoCard-div-main container">
          <div className="formTotal-div">
            <Form
              setIsLanding={setIsLanding}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <div className="list-div">
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeNoCard;
