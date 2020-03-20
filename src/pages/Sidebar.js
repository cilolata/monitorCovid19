import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./sidebar.css";

const Sidebar = () => {
  const [pais, setPais] = useState([]);
  const [paisAtual, setPaisAtual] = useState([]);

  useEffect(() => {
    const loadContries = async () => {
      const response = await api.get("/");

      const country = response.data.map(country => country);
      console.log(response.data)

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
    const id = parseInt(paisSelect);

    const result = pais.filter(p => p.id === id);

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
            <option key={p.id} name="country" 
            value={p.id}>
               {p.country}
            </option>
          ))}
        </select>

        <ul className="ul-paises">
          {paisAtual.map(p => (
            <li key={p.country}>
               <p>Casos</p>
              <p>
                <strong className="casos">{p.cases}</strong>
              </p>
           
              <p>Casos Hoje</p>
              <p>
                <strong className="casosHoje">{p.todayCases}</strong>
              </p>
              <p>Mortes</p>
              <p>
                <strong className="mortes">{p.deaths}</strong>
              </p>
              <p>Pessoas Recuperadas</p>
              <p>
                <strong className="pessoasRecuperadas">{p.recovered}</strong>
              </p>
              <p>Casos críticos</p>
              <p>
                <strong className="casosCriticos">{p.critical}</strong>
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;