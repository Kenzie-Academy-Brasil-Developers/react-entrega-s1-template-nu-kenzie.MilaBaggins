import "./style.css";

export function TotalMoney({ listTransactions }) {
  const result = listTransactions.map((item) => item.value);
  const result2 = result.reduce(
    (acumulador, currentValue) => acumulador + currentValue,
    0
  );
  return (
    <section className="section-card">
      <div className="div-card">
        <p>
          <strong>Valor total</strong>
        </p>
        <small className="small">R$ {result2}</small>
      </div>
      <div>
        <small>O valor se refere ao saldo</small>
      </div>
      {}
    </section>
  );
}

export default TotalMoney;
