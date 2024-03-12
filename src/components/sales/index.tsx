import './style.css'
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const index = () => {
  return (
    <main>
      <h1>VENDAS</h1>
      <div className="salesContainer">
        <div className="sales_body">
          <div className='salesLeft'>
            <div className="sales_row">
              <RiMoneyDollarCircleLine />

              <span>R$48.417,42</span>
              <span>Faturamento</span>
            </div>
            <div className="sales_row">
              <span>R$23,77</span>
              <span>Ticket Médio</span>
            </div>
            <div className="sales_row">
              <span>41,79%</span>
              <span>Margem Bruta</span>
            </div>
          </div>
          <div className='salesRight'>
            <div className="sales_row">
              <span>771</span>
              <span>Skus únicos</span>
            </div>
            <div className="sales_row">
              <span>52,30%</span>
              <span className='category'>das vendas em 5 categorias</span>
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
  )
}

export default index