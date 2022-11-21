import Header from "../components/header/index.jsx";
import Form from "../components/form/index.jsx";
import Cards from "../components/cards/index.jsx";
import "./style.css";

export function HomeNoCard() {
  return (
    <div className="HomeNoCard">
      <Header />
      <div className="HomeNoCard-div">
        <div className="HomeNoCard-div-main container">
          <Form />
          <Cards />
        </div>
      </div>
    </div>
  );
}
export default HomeNoCard;
