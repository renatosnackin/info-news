import React, { useState } from "react";
import { useEndpoint } from "../../context";
import "./style.css";

interface ModalProps {
  isOpen: boolean;
  onSubmit: (storeId: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onSubmit }) => {
  const [storeId, setStoreId] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  const { setStore, setMonth, setYear } = useEndpoint();

  const handleInputChange = (event: any, type: string) => {
    if (type === "store") {
      setStoreId(event.target.value);
    } else if (type === "month") {
      setMonthValue(event.target.value);
    } else if (type === "year") {
      setYearValue(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(storeId);
    setStore(storeId);
    setMonth(monthValue);
    setYear(yearValue);
    setStoreId("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-center">
      <div className="modal-content">
        <h2 className="text">Insira o id da loja abaixo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="ID da loja"
            value={storeId}
            onChange={(event) => handleInputChange(event, "store")}
            required
            className="storeInput"
          />
          <div className="dateInput">
            <select
              value={monthValue}
              onChange={(event) => handleInputChange(event, "month")}
            >
              <option value="">Mês</option>
              <option value="01">Janeiro</option>
              <option value="02">Fevereiro</option>
              <option value="03">Março</option>
              <option value="04">Abril</option>
              <option value="05">Maio</option>
              <option value="06">Junho</option>
              <option value="07">Julho</option>
              <option value="08">Agosto</option>
              <option value="09">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>

            <select
              value={yearValue}
              onChange={(event) => handleInputChange(event, "year")}
            >
              <option value="">Ano</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
