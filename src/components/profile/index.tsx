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
    age: item.age,
    quantity: item.quantity,
  }));

  const pizzaChartInfo = usersGroupedByGender?.map(
    (item: UsersGroupedByGender) => ({
      gender: item.gender,
      quantity: item.quantity,
    })
  );

  const salesData =
    barChartInfo?.map((item: { quantity: number }) => item?.quantity) || 0;
  const labels =
    barChartInfo?.map((item: { age: number }) => item?.age?.toString()) || 0;

  const pieChartData =
    pizzaChartInfo?.map((item: { quantity: number }) => item?.quantity) || 0;
  const pieChartLabels =
    pizzaChartInfo?.map((item: { gender: string }) => item?.gender) || "";

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
