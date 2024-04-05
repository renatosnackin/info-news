import './style.css';
import ProductList from './components/productList';
import CategoriesList from './components/categoriesList';
import { useEndpoint } from "../../context";
import { BestSelling, BestSellingCategory } from "../../types/types";

const TopItems = () => {
  const endpointData = useEndpoint();

  const bestSellingItems = endpointData ? endpointData.bestSellingItems : null;
  const bestSellingCategories = endpointData
    ? endpointData.bestSellingCategories
    : null;

  const products = bestSellingItems.map((item: BestSelling) => ({
    name: item.name,
    quantity: item.quantity,
    percentage: 0,
    value: item.salePrice,
    salePercentual: item.salePercentual
  }));

  const categories = bestSellingCategories.map((item: BestSellingCategory) => ({
    name: item.category,
    quantity: item.quantity,
    percentage: 0,
    value: item.sales,
    salePercentual: item.salePercentual,
    rankingPositionVariation: item.rankingPositionVariation
  }));

  return (
    <main>
      <h1 className="backgroundItems">TOP 10 ITENS MAIS VENDIDOS - VALOR</h1>
      <div className="salesContainerItems">
        <ProductList products={products} />
        <CategoriesList categories={categories} />
      </div>
    </main>
  );
};

export default TopItems;
