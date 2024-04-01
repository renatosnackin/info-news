import { useEndpoint } from "../../context";
import "./style.css";
import BarChart from "./barChart";
import PizzaChart from "./pizzaChart";
import { UsersGroupedByAge, UsersGroupedByGender } from "../../types/types";
import WordCloudComponent from "./wordcloud";

const Assessments = () => {
  const endpointData = useEndpoint();

  const salesData = [10, 20, 30, 40, 50];
  const labels = ['9', '18', '27', '37', '46'];

  const pieChartData = [80, 20];
  const pieChartLabels = ['Promotores', 'Neutros'];

  return (
    <main>
      <h1 className="backgroundAssessments">AVALIAÇÕES DO APP</h1>
      <div className="salesContainerAssessments">
        <span className="span_left">Nota dada pelos clientes (máximo 5)</span>
        <div className="graphics">
          <div className="graphicsBar">
            <BarChart data={salesData} labels={labels} />
          </div>
          <div className="graphicsPizza">
            <PizzaChart data={pieChartData} labels={pieChartLabels} />
          </div>
        </div>
        <span className="span_left">Nuvem de Palavras - Palavras mais usadas pelos clientes</span>
        <div className="cloud">
          <WordCloudComponent />
        </div>
      </div>
    </main>
  );
};

export default Assessments;
