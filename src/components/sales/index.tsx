import "./style.css";

import cash from "../../assets/cash.svg";
import arrow from "../../assets/arrow.svg";
import box from "../../assets/box_circle.svg";
import sarch from "../../assets/search.svg";
import graph from "../../assets/graph_up.svg";
import pix from "../../assets/pix.svg";
import { useEndpoint } from "../../context";

const Sales = () => {
  const endpointData = useEndpoint();

  const invoiceData = endpointData ? endpointData.invoiceData : null;

  return (
    <main>
      <a
        href="https://snackin.tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="LinkSales"
      >
        Link para o painel de dados
      </a>
      <h1 style={{ marginTop: "10px" }}>VENDAS</h1>
      <div className="salesContainer">
        <div className="sales_body">
          <div className="salesLeft">
            <div className="sales_row">
              <img src={cash} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>R$ {(invoiceData && invoiceData.invoicing) || 0}</span>
                <span>Faturamento</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>
                    {(invoiceData && invoiceData.invoicingProfit) || 0}%
                  </span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={cash} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>R$ {(invoiceData && invoiceData.storeTicket) || 0}</span>
                <span>Ticket Médio</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>
                    {(invoiceData && invoiceData.storeTicketProfit) || 0}%
                  </span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={cash} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>{(invoiceData && invoiceData.earn) || 0}%</span>
                <span>Margem Bruta</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>{(invoiceData && invoiceData.earnProfit) || 0}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="salesLeft">
            <div className="sales_row">
              <img src={box} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>{(invoiceData && invoiceData.SKUs) || 0}</span>
                <span>Skus únicos</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>{(invoiceData && invoiceData.SKUsProfit) || 0}%</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={sarch} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>SEM VALOR%</span>
                <span className="category">das vendas em 5 categorias</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>SEM VALOR%</span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={graph} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>{(invoiceData && invoiceData.transactions) || 0}</span>
                <span>Transações</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>
                    {(invoiceData && invoiceData.transactionProfit) || 0}
                  </span>
                </div>
              </div>
            </div>
            <div className="sales_row">
              <img src={pix} alt="cash image" className="cash" />
              <div className="sales_row_container">
                <span>{(invoiceData && invoiceData.pixPayments) || 0}%</span>
                <span>Pgts no Pix</span>
                <div className="arrowContainer">
                  <img src={arrow} alt="" className="arrow" />
                  <span>
                    {(invoiceData && invoiceData.pixPaymentsProfit) || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sales;