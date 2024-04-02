import { useEndpoint } from "../../context";
import "./style.css";
import BarChart from "./barChart";
import PizzaChart from "./pizzaChart";
import { UsersGroupedByAge, UsersGroupedByGender } from "../../types/types";
import WordCloudComponent from "./wordcloud";

const Assessments = () => {
  const endpointData = useEndpoint();

  const salesData = [4.74, 4.79, 4.80, 4.82, 4.91];
  const labels = ['Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março'];

  const pieChartData = [80, 20];
  const pieChartLabels = ['Promotores', 'Neutros'];

  return (
    <main>
      <h1 className="backgroundAssessments">AVALIAÇÕES DO APP</h1>
      <div className="salesContainerAssessments">
        <div className="div_title ">
          <span >Nota dada pelos clientes (máximo 5)</span>
        </div>
        <div className="graphics_app">
          <div >
            <BarChart data={salesData} labels={labels} />
          </div>
          <div className="average">
            <span className="average_number">4,91</span>
            <span className="average_note">Nota Média</span>
          </div>
          <div >
            <PizzaChart data={pieChartData} labels={pieChartLabels} />
          </div>
        </div>
        <div className="div_title ">
          <span className="span_left">Nuvem de Palavras - Palavras mais usadas pelos clientes</span>
        </div>
        <div className="cloud">
          <WordCloudComponent />
        </div>
      </div>
    </main>
  );
};

export default Assessments;
