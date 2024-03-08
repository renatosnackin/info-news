import "./style.css";

import cash from "../../assets/cash.svg";
import arrow from "../../assets/arrow.svg";

const index = () => {
  return (
    <main>
      <h1>VENDAS</h1>
      <div className="salesContainer">
        <div className="sales_body">
          <div className="salesLeft">
            <div className="sales_row">
              <img src={cash} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>R$48.417,42</span>
                <span>Faturamento</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>21,03%</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={cash} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>R$23,77</span>
                <span>Ticket Médio</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>6,30%</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={cash} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>41,79%</span>
                <span>Margem Bruta</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>9,91%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="salesRight">
            <div className="sales_row">
              <span>771</span>
              <span>Skus únicos</span>
            </div>
            <div className="sales_row">
              <span>52,30%</span>
              <span className="category">das vendas em 5 categorias</span>
            </div>
            <div className="sales_row">
              <span>2037</span>
              <span>Transações</span>
            </div>
            <div className="sales_row">
              <span>22,24%</span>
              <span>Pgtos no Pix</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
