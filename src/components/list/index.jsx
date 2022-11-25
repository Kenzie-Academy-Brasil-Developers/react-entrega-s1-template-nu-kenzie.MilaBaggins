import "./style.css";
import Cards from "../cards";
import NoCardImg from "../../img/noCard.svg";
import { useState } from "react";

export function List({ listTransactions, setListTransactions }) {
  const [filterType, setFilteType] = useState("");

  function onClickDelete(index) {
    const array = [...listTransactions];
    array.splice(index, 1);
    console.log(array);
    setListTransactions(array);
  }

  return (
    <section className="Cards-section">
      <div className="Cards-div-header">
        <p>Resumo financeiro</p>
        <div className="Cards-button-div">
          <button
            className="button-pink"
            id="all-button"
            onClick={() => {
              setFilteType("");
            }}
          >
            Todos
          </button>
          <button
            className="button-grey"
            id="value-in-button"
            onClick={() => {
              setFilteType("entrada");
            }}
          >
            Entradas
          </button>
          <button
            className="button-grey"
            id="value-out-button"
            onClick={() => {
              setFilteType("saída");
            }}
          >
            Saídas
          </button>
        </div>
      </div>
      {listTransactions.length !== 0 ? (
        listTransactions
          .filter((item) => filterType === "" || item.type === filterType)
          .map((transaction, index) => (
            <Cards
              transaction={transaction}
              key={index}
              index={index}
              onClickDelete={onClickDelete}
            />
          ))
      ) : (
        <img src={NoCardImg} alt="" className="Cards-img" />
      )}
    </section>
  );
}

export default List;
