import React from 'react';
import './style.css';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import BarChart from './barChart';
import PizzaChart from './pizzaChart';


const Profile: React.FC = () => {
    // Dados de exemplo para o gráfico em barra
    const salesData = [10, 20, 30, 40, 50];
    const labels = ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'];

    const pieChartData = [80, 20];
    const pieChartLabels = ['Masculino', 'Feminino'];

    return (
        <main>
            <h1 className="backgroundProfile">PERFIL DO CLIENTE</h1>
            <div className="salesContainerProfile">
                <div className='graphics'>
                    <div className='graphicsBar'>
                        <BarChart data={salesData} labels={labels} />

                    </div>
                    <div className='graphicsPizza'>
                        <PizzaChart data={pieChartData} labels={pieChartLabels} />

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;
