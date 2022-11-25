import "./style.css";
import Logo from "../../img/Nu Kenzie Black.svg";

export function Header({ setIsLanding }) {
  return (
    <section className="Header-section">
      <div className="Header-div container">
        <img src={Logo} alt="" className="logo" />
        <button
          onClick={() => {
            setIsLanding(true);
          }}
          className="button-grey"
        >
          Início
        </button>
      </div>
    </section>
  );
}

export default Header;
