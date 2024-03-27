import React from 'react';
import './style.css';
import { CategoriesListProps } from "../../../../types/types";

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    return (
        <div className="product-list-container">
            <h1 className="backgroundItems">TOP 10 CATEGORIAS MAIS VENDIDAS - VALOR</h1>
            <div className="salesContainerCategories"></div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>%</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((categories, index) => (
                        <tr key={index}>
                            <td>{categories.name}</td>
                            <td>{categories.quantity}</td>
                            <td>{categories.percentage}%</td>
                            <td>R${categories.value.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesList;
