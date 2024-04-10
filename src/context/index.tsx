import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  BestSelling,
  ConsumerProfile,
  EndpointResponse,
  Header,
  InvoiceData,
  StoreAccessData,
} from "../types/types";

const EndpointContext = createContext<any>(null);

const EndpointProvider = ({ children }: { children: ReactNode }) => {
  const [endpointData, setEndpointData] = useState<EndpointResponse | null>();
  const [store, setStore] = useState<number | null>();
  const [month, setMonth] = useState<number | null>();
  const [year, setYear] = useState<number | null>();
  const [header, setHeader] = useState<Header>();
  const [invoiceData, setInvoiceData] = useState<InvoiceData>();
  const [bestSellingItems, setBestSellingItems] = useState<BestSelling[]>([]);
  const [bestSellingCategories, setBestSellingCategories] = useState<
    BestSelling[]
  >([]);
  const [users, setUsers] = useState<StoreAccessData>();
  const [consumerProfile, setConsumerProfile] = useState<ConsumerProfile>();

  const addHeader = (endpointData: Header) => {
    const {storeId, storeName, storeAddress, period} = endpointData;

    const header: Header = {
      storeId,
      storeName,
      storeAddress,
      period,
    };

    setHeader(header);
  };

  const addInvoiceData = (endpointData: InvoiceData) => {
    const {
      invoicing,
      invoicingProfit,
      storeTicket,
      storeTicketProfit,
      earn,
      earnProfit,
      SKUs,
      SKUsProfit,
      transactions,
      transactionProfit,
      pixPayments,
      pixPaymentsProfit,
      bestSellingCategoriesSalesPercentual,
      bestSellingCategoriesSalesPercentualProfit
    } = endpointData;

    const invoiceData: InvoiceData = {
      invoicing,
      invoicingProfit,
      storeTicket,
      storeTicketProfit,
      earn,
      earnProfit,
      SKUs,
      SKUsProfit,
      transactions,
      transactionProfit,
      pixPayments,
      pixPaymentsProfit,
      bestSellingCategoriesSalesPercentual,
      bestSellingCategoriesSalesPercentualProfit
    };

    setInvoiceData(invoiceData);
  };

  const addUsersInfo = (endpointData: StoreAccessData) => {
    const {
      storeAccessCount,
      storeAccessCountProfit,
      storeUniqueAccessCount,
      storeUniqueAccessCountProfit,
    } = endpointData;

    const users: StoreAccessData = {
      storeAccessCount,
      storeAccessCountProfit,
      storeUniqueAccessCount,
      storeUniqueAccessCountProfit,
    };

    setUsers(users);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://test.snackin.net:5123/v2/stores/${store}/infonews?period=${month}-${year}`,
        {
          headers: {
            "accept": "application/json;v=2",
            "x-secret": process.env.REACT_APP_PROTECTED_ENDPOINT_SECRET_HML,
          },
        }
      );
      setEndpointData(response.data);
      addHeader(response.data);
      addInvoiceData(response.data);
      setBestSellingItems(response.data.bestSellingItems);
      setBestSellingCategories(response.data.bestSellingCategories);
      addUsersInfo(response.data);
      setConsumerProfile(response.data.consumerProfile);
    } catch (error) {
      console.error("Erro ao buscar os dados do endpoint:", error);
    }
  };

  useEffect(() => {
    if (store) {
      fetchData();
    }
  }, [store]);

  return (
    <EndpointContext.Provider
      value={{
        header,
        invoiceData,
        bestSellingItems,
        bestSellingCategories,
        users,
        consumerProfile,
        store,
        setStore,
        month,
        setMonth,
        year,
        setYear,
      }}
    >
      {children}
    </EndpointContext.Provider>
  );
};

const useEndpoint = () => {
  const context = useContext(EndpointContext);
  if (!context) {
    throw new Error("useEndpoint deve ser usado dentro de um EndpointProvider");
  }
  return context;
};

export { EndpointProvider, useEndpoint };
