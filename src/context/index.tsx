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
  // const [endpointData, setEndpointData] = useState<any | null>();
  const [store, setStore] = useState<number | null>();
  const [month, setMonth] = useState<number | null>();
  const [year, setYear] = useState<number | null>();
  const [header, setHeader] = useState<Header>();
  const [invoiceData, setInvoiceData] = useState<InvoiceData>();
  const [bestSellingItems, setBestSellingItems] = useState<BestSelling[]>([]);
  const [bestSellingCategories, setBestSellingCategories] = useState<
    BestSelling[]
  >([]);
  // const [bestSellingCategories, setBestSellingCategories] = useState<
  //   any[]
  // >([]);
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
            Accept: "application/json;v=2",
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

      // const data = {
      //   storeId: 36,
      //   storeName: "BELVEDERE TOWERS",
      //   storeAddress: "Uberlândia - MG",
      //   period: "fevereiro de 2022",
      //   invoicing: 567489,
      //   invoicingProfit: 2.94,
      //   storeTicket: 579.07,
      //   storeTicketProfit: 2.34,
      //   earn: 253067,
      //   earnProfit: 2.39,
      //   SKUs: 962,
      //   SKUsProfit: -1.25,
      //   transactions: 962,
      //   transactionProfit: -1.25,
      //   pixPayments: 0,
      //   pixPaymentsProfit: 0,
      //   bestSellingItems: [
      //     {
      //       quantity: 62,
      //       name: "CERVEJA HEINEKEN 330ML",
      //       salePrice: 37014,
      //       salePercentual: 0.10520027700977465,
      //       rankingPositionVariation: 2,
      //     },
      //     {
      //       quantity: 32,
      //       name: "CERVEJA HEINEKEN LT 473ML",
      //       salePrice: 22304,
      //       salePercentual: 0.1228217639460853,
      //       rankingPositionVariation: -2,
      //     },
      //     {
      //       quantity: 27,
      //       name: "AGUA CRYSTAL C/ GAS 500ML",
      //       salePrice: 6669,
      //       salePercentual: 0.04352507273268733,
      //       rankingPositionVariation: 2,
      //     },
      //     {
      //       quantity: 26,
      //       name: "ACHOCOLATADO TODDYNHO 200ML (27)",
      //       salePrice: 8102,
      //       salePercentual: 0.03823862665179413,
      //       rankingPositionVariation: -4,
      //     },
      //     {
      //       quantity: 22,
      //       name: "COCA COLA LATA 220ML",
      //       salePrice: 6534,
      //       salePercentual: 0.052335816200842655,
      //       rankingPositionVariation: -3,
      //     },
      //     {
      //       quantity: 20,
      //       name: "COCA COLA 1,5 L",
      //       salePrice: 17940,
      //       salePercentual: 0.1580647378187066,
      //       rankingPositionVariation: -6,
      //     },
      //     {
      //       quantity: 20,
      //       name: "CERVEJA AMSTEL LATA 350ML",
      //       salePrice: 7940,
      //       salePercentual: 0.06995730313715331,
      //       rankingPositionVariation: -6,
      //     },
      //     {
      //       quantity: 18,
      //       name: "COCA COLA S/ ACUCAR LATA 220ML",
      //       salePrice: 5346,
      //       salePercentual: 0.052335816200842655,
      //       rankingPositionVariation: 0,
      //     },
      //     {
      //       quantity: 16,
      //       name: "PICOLE FINI TUBES MORANGO 45G",
      //       salePrice: 5600,
      //       salePercentual: 0.061675204277087316,
      //       rankingPositionVariation: -9,
      //     },
      //     {
      //       quantity: 16,
      //       name: "SPRITE LEMON FRESH 510ML",
      //       salePrice: 5872,
      //       salePercentual: 0.06467085705626012,
      //       rankingPositionVariation: -10,
      //     },
      //   ],
      //   bestSellingItemsSalesPercentual: 0.768825475031234,
      //   bestSellingCategories: [
      //     {
      //       sales: 14553,
      //       category: "BOMBONIERE E DOCES",
      //       quantity: 49,
      //       salePercentual: 2.56445499384129,
      //       rankingPositionVariation: 5,
      //     },
      //     {
      //       sales: 70224,
      //       category: "MERCEARIA",
      //       quantity: 42,
      //       salePercentual: 12.374512986154798,
      //       rankingPositionVariation: -6,
      //     },
      //     {
      //       sales: 17940,
      //       category: "NAO ALCOOLICAS",
      //       quantity: 20,
      //       salePercentual: 3.1612947563741325,
      //       rankingPositionVariation: 4,
      //     },
      //     {
      //       sales: 9900,
      //       category: "PICOLES",
      //       quantity: 18,
      //       salePercentual: 1.7445272066947553,
      //       rankingPositionVariation: 0,
      //     },
      //     {
      //       sales: 18649,
      //       category: "SALGADINHOS E SNACKS",
      //       quantity: 17,
      //       salePercentual: 3.286231098752575,
      //       rankingPositionVariation: 0,
      //     },
      //   ],
      //   bestSellingCategoriesSalesPercentual: 23.131021041817547,
      //   storeAccessCount: 0,
      //   storeAccessCountProfit: 0,
      //   storeUniqueAccessCount: 0,
      //   storeUniqueAccessCountProfit: 0,
      //   consumerProfile: {
      //     usersGroupedByAge: [
      //       {
      //         age: 0,
      //         quantity: 1,
      //       },
      //       {
      //         age: 15,
      //         quantity: 1,
      //       },
      //       {
      //         age: 16,
      //         quantity: 2,
      //       },
      //       {
      //         age: 17,
      //         quantity: 2,
      //       },
      //       {
      //         age: 19,
      //         quantity: 2,
      //       },
      //       {
      //         age: 20,
      //         quantity: 4,
      //       },
      //       {
      //         age: 21,
      //         quantity: 1,
      //       },
      //       {
      //         age: 22,
      //         quantity: 5,
      //       },
      //       {
      //         age: 23,
      //         quantity: 3,
      //       },
      //       {
      //         age: 24,
      //         quantity: 6,
      //       },
      //       {
      //         age: 25,
      //         quantity: 11,
      //       },
      //       {
      //         age: 26,
      //         quantity: 5,
      //       },
      //       {
      //         age: 27,
      //         quantity: 4,
      //       },
      //       {
      //         age: 28,
      //         quantity: 6,
      //       },
      //       {
      //         age: 29,
      //         quantity: 12,
      //       },
      //       {
      //         age: 30,
      //         quantity: 6,
      //       },
      //       {
      //         age: 31,
      //         quantity: 4,
      //       },
      //       {
      //         age: 32,
      //         quantity: 4,
      //       },
      //       {
      //         age: 33,
      //         quantity: 18,
      //       },
      //       {
      //         age: 34,
      //         quantity: 7,
      //       },
      //       {
      //         age: 35,
      //         quantity: 12,
      //       },
      //       {
      //         age: 36,
      //         quantity: 4,
      //       },
      //       {
      //         age: 37,
      //         quantity: 10,
      //       },
      //       {
      //         age: 38,
      //         quantity: 7,
      //       },
      //       {
      //         age: 39,
      //         quantity: 1,
      //       },
      //       {
      //         age: 40,
      //         quantity: 5,
      //       },
      //       {
      //         age: 41,
      //         quantity: 3,
      //       },
      //       {
      //         age: 42,
      //         quantity: 7,
      //       },
      //       {
      //         age: 43,
      //         quantity: 3,
      //       },
      //       {
      //         age: 44,
      //         quantity: 2,
      //       },
      //       {
      //         age: 45,
      //         quantity: 8,
      //       },
      //       {
      //         age: 47,
      //         quantity: 1,
      //       },
      //       {
      //         age: 48,
      //         quantity: 3,
      //       },
      //       {
      //         age: 49,
      //         quantity: 2,
      //       },
      //       {
      //         age: 51,
      //         quantity: 3,
      //       },
      //       {
      //         age: 52,
      //         quantity: 3,
      //       },
      //       {
      //         age: 54,
      //         quantity: 1,
      //       },
      //       {
      //         age: 56,
      //         quantity: 1,
      //       },
      //       {
      //         age: 57,
      //         quantity: 2,
      //       },
      //       {
      //         age: 58,
      //         quantity: 1,
      //       },
      //       {
      //         age: 60,
      //         quantity: 2,
      //       },
      //       {
      //         age: 61,
      //         quantity: 1,
      //       },
      //       {
      //         age: 62,
      //         quantity: 2,
      //       },
      //       {
      //         age: 64,
      //         quantity: 1,
      //       },
      //       {
      //         age: 67,
      //         quantity: 1,
      //       },
      //       {
      //         age: 70,
      //         quantity: 1,
      //       },
      //       {
      //         age: 72,
      //         quantity: 1,
      //       },
      //       {
      //         age: null,
      //         quantity: 2,
      //       },
      //     ],
      //     usersGroupedByGender: [
      //       {
      //         gender: "Masculino",
      //         quantity: 104,
      //       },
      //       {
      //         gender: "Não informado",
      //         quantity: 28,
      //       },
      //       {
      //         gender: "Feminino",
      //         quantity: 62,
      //       },
      //     ],
      //   },
      // };

      // setEndpointData(data);

      // addHeader(data);
      // addInvoiceData(data);
      // setBestSellingItems(data.bestSellingItems);
      // setBestSellingCategories(data.bestSellingCategories);
      // addUsersInfo(data);
      // setConsumerProfile(data.consumerProfile);
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
