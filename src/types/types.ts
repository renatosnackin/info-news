interface Header {
  storeId: number;
  storeName: string;
  storeAddress: string;
  period: string;
}

interface BestSelling {
  name: string;
  quantity: number;
}

interface StoreAccessData {
  storeAccessCount: number;
  storeAccessCountProfit: number;
  storeUniqueAccessCount: number;
  storeUniqueAccessCountProfit: number;
}

interface UsersGroupedByAge {
  name: number | null;
  quantity: number;
}

interface UsersGroupedByGender {
  name: string | null;
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
  percentage: number | null;
  value: number | 0;
}

interface ProductListProps {
  products: Product[];
}

interface Categories {
  name: string;
  quantity: number;
  percentage: number;
  value: number;
}

interface CategoriesListProps {
  categories: Categories[];
}

export type {
  EndpointResponse,
  Header,
  InvoiceData,
  BestSelling,
  StoreAccessData,
  ConsumerProfile,
  UsersGroupedByAge,
  UsersGroupedByGender,
  ProductListProps,
  CategoriesListProps
};
