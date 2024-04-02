import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import "./style.css";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const words = [
  {
    text: 'Preços',
    value: 64,
  },
  {
    text: 'Aplicativo Platico',
    value: 11,
  },
  {
    text: 'Comodidade',
    value: 16,
  },
  {
    text: 'Variedade',
    value: 17,
  },
  {
    text: 'Produtos',
    value: 22,
  },
  {
    text: 'Facilidade',
    value: 28,
  },
  {
    text: 'Compra',
    value: 33,
  },
  {
    text: 'Acessíveis',
    value: 25,
  },
  {
    text: 'Praticidade',
    value: 30,
  },
  
];

const options = {
    fontSizes: [30, 120].slice(),
    rotations: 0, 
    scale: 'linear', 
    spiral: 'archimedean', 
    minSize: 20,
    width:'500px'
  };

function WordCloudComponent() {
  return (
    <div className='cloud'>
      <ReactWordcloud words={words} options={options as any}/>
    </div>
  );
}

export default WordCloudComponent;
