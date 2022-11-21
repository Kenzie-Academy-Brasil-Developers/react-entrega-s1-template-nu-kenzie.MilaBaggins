import "./style.css";
import NoCardImg from "../../img/noCard.svg";
import TrashImg from "../../img/trash.svg";

export function Cards() {
  return (
    <section className="Cards-section">
      <div className="Cards-div-header">
        <p>Resumo financeiro</p>
        <div className="Cards-button-div">
          <button className="button-pink" id="all-button">
            Todos
          </button>
          <button className="button-grey" id="value-in-button">
            Entradas
          </button>
          <button className="button-grey" id="value-out-button">
            Despesas
          </button>
        </div>
      </div>
      <div id="Card-div-insert-card">
        <section className="Cards-entrada" id="card-value-in">
          <div className="Cards-green-tag">p</div>
          <div className="Cards-div">
            <div className="Cards-card-info">
              <p>
                <strong>Descrição</strong>{" "}
              </p>
              <small>R$ dinheiro</small>
              <img src={TrashImg} alt="" className="trash-img" />
            </div>
            <small>Entrada</small>
          </div>
        </section>

        <section className="Cards-entrada" id="card-value-out">
          <div className="Cards-greyr-tag">p</div>
          <div className="Cards-div">
            <div className="Cards-card-info">
              <p>
                <strong>Descrição</strong>{" "}
              </p>
              <small>R$ dinheiro</small>
              <img src={TrashImg} alt="" className="trash-img" />
            </div>
            <small>Saída</small>
          </div>
        </section>

        {/* <img src={NoCardImg} alt="" className="Cards-img" /> */}
      </div>
    </section>
  );
}

export default Cards;
