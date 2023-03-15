import "./App.css";
import "./index.css";
import local from "./Images/local.png";
import wind from "./Images/wind.png";
import humidity from "./Images/humidity.png";
import rain from "./Images/rain.png";
import clouds from "./Images/clouds.png";
import air from "./Images/air.png";
import sun from "./Images/sun.png";

function weatherApp() {
  return (
    <div id="Card" className="App-content">
      <div className="Temperature-content">
        <img className="Clouds" src={clouds} alt="Imagem Nuvens" />
        <header className="Localization">
          <img src={local} alt="Imagem Localização" />
          <p> Belém, Pará</p>
        </header>
        <section>
          <p className="Temperature">
            <strong>18</strong>
          </p>
          <p className="Unidade">°C</p>
          <p className="Sensacao">
            22° <label>16°</label>
          </p>
        </section>

        <div className="Informations">
          <div className="Wind">
            <img src={wind} alt="Imagem Vento" />
            <p>
              Vento
              <br />
              <strong>
                <b>17 </b>
              </strong>
              Km/h
            </p>
          </div>
          <div className="Humidity">
            <img src={humidity} alt="Imagem Umidade" />
            <p>
              Umidade
              <br />
              <strong>
                <b>17 </b>
              </strong>
              %
            </p>
          </div>
          <div className="Rain">
            <img src={rain} alt="Imagem Chuva" />
            <p>
              Chuva
              <br />
              <strong>
                <b>17 </b>
              </strong>
              %
            </p>
          </div>
        </div>
      </div>

      <div className="Air-content">
        <p>
          <img src={air} alt="Imagem do Ar" /> Qualidade do Ar
        </p>
        <p className="Air">
          <label>Boa</label>
          <strong>18</strong>
        </p>
      </div>
      <div className="Sun-content">
        <p>
          <img src={sun} alt="Imagem do Sol" /> Horário do Sol
        </p>
      </div>
      <div className="Weather-content"></div>
    </div>
  );
}

export default weatherApp;
