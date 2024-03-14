import "./style.css";

import cash from "../../assets/cash.svg";
import arrow from "../../assets/arrow.svg";
import box from "../../assets/box_circle.svg";
import sarch from "../../assets/search.svg";
import graph from "../../assets/graph_up.svg";
import pix from "../../assets/pix.svg";




const index = () => {
  return (
    <main>
      <a href="https://snackin.tech/" target="_blank" rel="noopener noreferrer" className="LinkSales">Link para o painel de dados</a>
      <h1 style={{ marginTop: '10px' }}>VENDAS</h1>
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
          <div className="salesLeft">
            <div className="sales_row">
              <img src={box} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>771</span>
                <span>Skus únicos</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>4,61%</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={sarch} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>52,30%</span>
                <span className="category">das vendas em 5 categorias</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>4,45%</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={graph} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>2037</span>
                <span>Transações</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>17,60</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={pix} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>22,24%</span>
                <span>Pgts no Pix</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>17,60</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;