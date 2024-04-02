import React from "react";
import Modal from "../modal";
import { useEndpoint } from "../../context";
import "./style.css";

const InputStore = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);
  const { store } = useEndpoint();

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!store && (
        <div className="container_modal-content">
          <div className="container_modal">
            <Modal
              isOpen={isModalOpen}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InputStore;
