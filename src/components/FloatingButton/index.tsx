import { FloatingButtonProps } from "../../types/types";
import "./style.css";

const FloatingButton = ({handleGeneratePDF}: FloatingButtonProps) => {
  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={handleGeneratePDF}>
        Download PDF
      </button>
    </div>
  );
};

export default FloatingButton;
