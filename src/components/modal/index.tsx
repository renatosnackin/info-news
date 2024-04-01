import React, { useState } from "react";
import { useEndpoint } from "../../context";
import "./style.css";

interface ModalProps {
  isOpen: boolean;
  onSubmit: (storeId: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onSubmit }) => {
  const [storeId, setStoreId] = useState("");
  const { setStore } = useEndpoint();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoreId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(storeId);
    setStore(storeId);
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
            onChange={handleInputChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
