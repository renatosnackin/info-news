import React from 'react';
import './style.css';

interface Product {
  name: string;
  quantity: number;
  percentage: number;
  value: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>%</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.percentage}%</td>
              <td>R${product.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;