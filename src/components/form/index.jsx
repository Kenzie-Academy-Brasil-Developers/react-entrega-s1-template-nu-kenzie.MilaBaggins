import "./style.css";

export function Form({ listTransactions, setListTransactions, setIsLanding }) {
  function submit(event) {
    event.preventDefault();

    const description = document.getElementById("description-input").value;
    const valueType = parseInt(document.getElementById("value-input").value);
    const option = document.getElementById("select-type").value;

    const newData = {
      description: description,
      type: option,
      value: valueType,
    };
    setListTransactions([...listTransactions, newData]);
  }

  return (
    <section className="Form-section">
      <div className="Form-div">
        <form
          className="Form"
          onSubmit={(event) => {
            submit(event);
          }}
        >
          <ul className="Form-ul">
            <li>
              <small id="description">Descrição</small>
            </li>
            <li>
              <input
                type="text"
                placeholder="Digite sua descrição aqui"
                id="description-input"
              />
            </li>
            <li>
              <small id="example">Ex: Compra de roupas</small>
            </li>
            <li>
              <div className="Form-div-inputs">
                <div className="Form-div-value">
                  <label htmlFor="">Valor</label>
                  <input
                    type="number"
                    placeholder="Digite um valor"
                    id="value-input"
                  />
                </div>
                <div className="Form-div-select">
                  <label htmlFor="">Tipo de valor</label>
                  <select name="type-value" id="select-type">
                    <option value="entrada">entrada</option>
                    <option value="saída">saída</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <button
                onClick={(event) => {}}
                className="button-pink"
                id="insert-value-button"
                type="submit"
              >
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
