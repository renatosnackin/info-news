import './style.css';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import ProductList from './components/productList';
import CategoriesList from './components/categoriesList';

const TopItems = () => {
  // Exemplo de dados de produtos
  const products = [
    { name: 'Produto 1', quantity: 10, percentage: 20, value: 50.5 },
    { name: 'Produto 2', quantity: 20, percentage: 30, value: 30.75 },
    { name: 'Produto 3', quantity: 15, percentage: 15, value: 20.25 },
    { name: 'Produto 4', quantity: 5, percentage: 10, value: 10.99 },
    { name: 'Produto 1', quantity: 10, percentage: 20, value: 50.5 },
    { name: 'Produto 2', quantity: 20, percentage: 30, value: 30.75 },
    { name: 'Produto 3', quantity: 15, percentage: 15, value: 20.25 },
    { name: 'Produto 4', quantity: 5, percentage: 10, value: 10.99 },
  ];

  const categories = [
    { name: 'Produto 1', quantity: 10, percentage: 20, value: 50.5 },
    { name: 'Produto 2', quantity: 20, percentage: 30, value: 30.75 },
    { name: 'Produto 3', quantity: 15, percentage: 15, value: 20.25 },
    { name: 'Produto 4', quantity: 5, percentage: 10, value: 10.99 },

  ];

  return (
    <main>
      <h1 className="backgroundItems">TOP 10 ITENS MAIS VENDIDOS - VALOR</h1>
      <div className="salesContainerItems">
        <ProductList products={products} />
        <CategoriesList categories={categories}/>
      </div>
    </main>
  );
};

export default TopItems;
