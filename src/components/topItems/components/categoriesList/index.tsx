import React from "react";
import "./style.css";
import {CategoriesListProps} from "../../../../types/types";
import {FaSquare} from "react-icons/fa";
import {BiSolidUpArrow} from "react-icons/bi";

const CategoriesList: React.FC<CategoriesListProps> = ({categories}) => {
  const renderColoredForms = (variation: number | 0) => {
    if (variation === 0) {
      return <FaSquare color="#FEC110"  className="square"/>;
    } else if (variation < 0) {
      return <BiSolidUpArrow color="#ee3e35" className="form" />;
    } else {
      return <BiSolidUpArrow color="#17baac" className="form" />;
    }
  };

  return (
    <div className="product-list-container">
      <h1 className="backgroundItems">
        TOP 10 CATEGORIAS MAIS VENDIDAS - VALOR
      </h1>
      <div className="salesContainerCategories"></div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categories, index) => (
            <tr key={index}>
              <td className="name">
                {categories.name}{" "}
                {renderColoredForms(categories.rankingPositionVariation)}
              </td>
              <td>{categories.quantity}</td>
              <td>R$ {categories.value.toFixed(2)}</td>
              <td>
                {categories && (categories.salePercentual || 0).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
