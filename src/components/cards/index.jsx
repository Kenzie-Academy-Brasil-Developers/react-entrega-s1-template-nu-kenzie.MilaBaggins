import "./style.css";
import TrashImg from "../../img/trash.svg";

export function Cards({ transaction, index, onClickDelete }) {
  return (
    <div id="Card-div-insert-card">
      <section className="Cards-entrada" id="card-value-in">
        {transaction.type === "entrada" ? (
          <div className="Cards-green-tag">p</div>
        ) : (
          <div className="Cards-grey-tag">p</div>
        )}

        <div className="Cards-div">
          <div className="Cards-card-info">
            <p>
              <strong>{transaction.description}</strong>{" "}
            </p>
            <small>R$ {transaction.value}</small>
            <img
              src={TrashImg}
              alt=""
              className="trash-img"
              onClick={() => {
                onClickDelete(index);
              }}
            />
          </div>
          <small>{transaction.type}</small>
        </div>
      </section>
    </div>
  );
}

export default Cards;
