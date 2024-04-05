interface Header {
  storeId: number;
  storeName: string;
  storeAddress: string;
  period: string;
}

interface BestSelling {
  name: string;
  quantity: number;
  salePrice: number | null;
  salePercentual: number | null;
}

interface BestSellingCategory extends BestSelling {
  category: string;
  sales: number | null;
  rankingPositionVariation: number | null;
}

interface StoreAccessData {
  storeAccessCount: number;
  storeAccessCountProfit: number;
  storeUniqueAccessCount: number;
  storeUniqueAccessCountProfit: number;
}

interface UsersGroupedByAge {
  age: number | null;
  quantity: number;
}

interface UsersGroupedByGender {
  gender: string | null;
  quantity: number;
}

interface ConsumerProfile {
  usersGroupedByAge: UsersGroupedByAge[];
  usersGroupedByGender: UsersGroupedByGender[];
}

interface InvoiceData {
  invoicing: number;
  invoicingProfit: number;
  storeTicket: number;
  storeTicketProfit: number;
  earn: number;
  earnProfit: number;
  SKUs: number;
  SKUsProfit: number;
  transactions: number;
  transactionProfit: number;
  pixPayments: number;
  pixPaymentsProfit: number;
  bestSellingCategoriesSalesPercentual: number;
  bestSellingCategoriesSalesPercentualProfit: number;
}

interface EndpointResponse {
  storeId: number;
  storeName: string;
  storeAddress: string;
  period: string;
  invoicing: number;
  invoicingProfit: number;
  storeTicket: number;
  storeTicketProfit: number;
  earn: number;
  earnProfit: number;
  SKUs: number;
  SKUsProfit: number;
  transactions: number;
  transactionProfit: number;
  pixPayments: number;
  pixPaymentsProfit: number;
  bestSellingItems: BestSelling[];
  bestSellingCategories: BestSelling[];
  storeAccessCount: number;
  storeAccessCountProfit: number;
  storeUniqueAccessCount: number;
  storeUniqueAccessCountProfit: number;
  consumerProfile: ConsumerProfile;
}

interface Product {
  name: string;
  quantity: number;
  salePercentual: number | null;
  value: number | 0;
}

interface ProductListProps {
  products: Product[];
}

interface Categories {
  name: string;
  quantity: number;
  value: number;
  salePercentual: number | null;
  rankingPositionVariation: number | 0;
}

interface CategoriesListProps {
  categories: Categories[];
}

export type {
  EndpointResponse,
  Header,
  InvoiceData,
  BestSelling,
  BestSellingCategory,
  StoreAccessData,
  ConsumerProfile,
  UsersGroupedByAge,
  UsersGroupedByGender,
  ProductListProps,
  CategoriesListProps
};
