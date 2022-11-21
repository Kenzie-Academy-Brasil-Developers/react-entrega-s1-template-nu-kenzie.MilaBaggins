import "./style.css";

export function Form() {
  return (
    <section className="Form-section">
      <div className="Form-div container">
        <form className="Form">
          <ul className="Form-ul">
            <li>
              <small id="description">Descrição</small>
            </li>
            <li>
              <input type="text" placeholder="Digite sua descrição aqui" />
            </li>
            <li>
              <small id="example">Ex: Compra de roupas</small>
            </li>
            <li>
              <div className="Form-div-inputs">
                <div className="Form-div-value">
                  <label htmlFor="">Valor</label>
                  <input type="number" placeholder="Digite um valor" />
                </div>
                <div className="Form-div-select">
                  <label htmlFor="">Tipo de valor</label>
                  <select name="type-value" id="select-type">
                    <option value="value-in">Entrada</option>
                    <option value="value-out">Despesas</option>
                    <option value="value-all">Todos</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <button className="button-pink" id="insert-value-button">
                Inserir Valor
              </button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

export default Form;
