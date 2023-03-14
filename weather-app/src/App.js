import "./App.css";
import "./index.css";
import local from "./Images/local.png";
import wind from "./Images/wind.png";
import humidity from "./Images/humidity.png";
import rain from "./Images/rain.png";

function weatherApp() {
  return (
    <div className="App-content">
      <div className="Temperature-content">
        <header className="Localization">
          <img src={local} alt="Imagem Localização" />
          <p> Belém, Pará</p>
        </header>
        <div className="Informations">
          <div className="Wind">
            <img src={wind} alt="Imagem Vento" />
            <p>Vento</p>
            <p>
              <strong>
                <b>17 </b>
              </strong>
              Km/h
            </p>
          </div>
          <div className="Humidity">
            <img src={humidity} alt="Imagem Umidade" />
            <p>Umidade</p>
            <p>
              <strong>
                <b>17 </b>
              </strong>
              Km/h
            </p>
          </div>
          <div className="Rain">
            <img src={rain} alt="Imagem Chuva" />
            <p>Chuva</p>
            <p>
              <strong>
                <b>17 </b>
              </strong>
              Km/h
            </p>
          </div>
        </div>
      </div>
      <div className="Air-content"></div>
      <div className="Sun-content"></div>
      <div className="Weather-content"></div>
    </div>
  );
}

export default weatherApp;
