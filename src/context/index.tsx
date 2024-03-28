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
  const [header, setHeader] = useState<Header>();
  const [invoiceData, setInvoiceData] = useState<InvoiceData>();
  const [bestSellingItems, setBestSellingItems] = useState<BestSelling[]>(
    []
  );
  const [bestSellingCategories, setBestSellingCategories] = useState<
  BestSelling[]
  >([]);
  const [users, setUsers] = useState<StoreAccessData>();
  const [consumerProfile, setConsumerProfile] = useState<ConsumerProfile>();

  const addHeader = (endpointData: Header) => {
    const { storeId, storeName, storeAddress, period } = endpointData;

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
    const storeId = 18;

    try {
      const response = await axios.get(
        `https://test.snackin.net:5123/v2/stores/${storeId}/infonews?period=02-2022`,
        {
          headers: {
            Accept: "application/json;v=2",
          },
        }
      );

      // console.log("response", response.data);

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
    fetchData();
  }, []);

  return (
    <EndpointContext.Provider
      value={{
        header,
        invoiceData,
        bestSellingItems,
        bestSellingCategories,
        users,
        consumerProfile,
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
