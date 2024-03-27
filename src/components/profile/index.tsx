import React from 'react';
import "./style.css";
import BarChart from "./barChart";
import PizzaChart from "./pizzaChart";
import { useEndpoint } from "../../context";
import { UsersGroupedByAge, UsersGroupedByGender } from "../../types/types";

const Profile: React.FC = () => {
  const endpointData = useEndpoint();

  const usersGroupedByAge = endpointData
    ? endpointData.consumerProfile?.usersGroupedByAge
    : null;

  const usersGroupedByGender = endpointData
    ? endpointData.consumerProfile?.usersGroupedByGender
    : null;

  const barChartInfo = usersGroupedByAge?.map((item: UsersGroupedByAge) => ({
    name: item.name,
    quantity: item.quantity,
  }));

  const pizzaChartInfo = usersGroupedByGender?.map(
    (item: UsersGroupedByGender) => ({
      name: item.name,
      quantity: item.quantity,
    })
  );

  const salesData =
    barChartInfo?.map((item: { quantity: number }) => item?.quantity) || 0;
  const labels =
    barChartInfo?.map((item: { name: number }) => item?.name?.toString()) || 0;

  const pieChartData =
    pizzaChartInfo?.map((item: { quantity: number }) => item?.quantity) || 0;
  const pieChartLabels =
    pizzaChartInfo?.map((item: { name: string }) => item?.name) || "";

  return (
    <main>
      <h1 className="backgroundProfile">PERFIL DO CLIENTE</h1>
      <div className="salesContainerProfile">
        <div className="graphics">
          <div className="graphicsBar">
            <BarChart data={salesData} labels={labels} />
          </div>
          <div className="graphicsPizza">
            <PizzaChart data={pieChartData} labels={pieChartLabels} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
