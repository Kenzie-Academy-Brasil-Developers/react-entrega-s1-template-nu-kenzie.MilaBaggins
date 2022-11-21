import "./style.css";
import "../../../src/index.css";
import Logo from "../../img/Nu Kenzie.svg";
import Illustration from "../../img/illustration.svg";

function changePages() {}

export function InicialCard() {
  return (
    <section className="InicialCard-section">
      <div className="InicialCard-info container">
        <div className="InicialCard-div-info">
          <ul className="InicialCard-ul-info">
            <li>
              <img src={Logo} alt="" className="logo" />
            </li>
            <li>
              <h1>Centralize o controle das suas finanças</h1>
            </li>
            <li>
              <small className="InicialCard-small">
                de forma rápida e segura{" "}
              </small>
            </li>
            <li>
              <button
                onClick={changePages}
                className="button-pink"
                id="init-button"
              >
                Iniciar
              </button>
            </li>
          </ul>
        </div>
        <div className="InicialCard-div-img">
          <img src={Illustration} alt="" className="illustration" />
        </div>
      </div>
    </section>
  );
}
