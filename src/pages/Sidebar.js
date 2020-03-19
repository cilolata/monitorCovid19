import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./sidebar.css";

const Sidebar = () => {
  const [pais, setPais] = useState([]);
  const [paisAtual, setPaisAtual] = useState([]);

  useEffect(() => {
    const loadContries = async () => {
      const response = await api.get("/locations");
      console.log(response.data)

      const country = response.data.locations.map(country => country);

      

      setPais(country);
      country.sort((a, b) => {
  
        return a.country > b.country ? 1 : -1;
      });
    };
    loadContries();
  }, []);

  useEffect(() => {
    const loadCountry = async () => {
      const atual = "Brazil";
      const result = pais.filter(p => p.country === atual);
      setPaisAtual(result);
    };
    loadCountry();
  }, [pais]);

  const handleSelectChange = event => {
    const paisSelect = event.target.value;

    const result = pais.filter(p => p.country === paisSelect);

    setPaisAtual(result);
  };

  return (
    <>
      <aside className="info-cases">
        <select
          name="select"
          className="custom-select"
          onChange={handleSelectChange}
        >
          <option value="Brazil" hidden>
            Brazil
          </option>
          {pais.map(p  => (
            <option key={p.id} name="country" value={p.country}>
              {p.province ? `${p.country} ${p.province}`: p.country }
            </option>
          ))}
        </select>

        <ul className="ul-paises">
          {paisAtual.map(p => (
            <li key={p.id}>
              <p>Região</p>
              <p>
                <strong className="casosHoje">{p.province}</strong>
              </p>
              <p>Todos casos</p>
              <p>
                <strong className="casos">{p.latest.confirmed}</strong>
              </p>
              <p>Mortes</p>
              <p>
                <strong className="mortes">{p.latest.deaths}</strong>
              </p>
              <p>Pessoas Recuperadas</p>
              <p>
                <strong className="pessoasRecuperadas">{p.latest.recovered}</strong>
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
