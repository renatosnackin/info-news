import { useEndpoint } from '../../context';
import './style.css';

const Header = () => {
  const endpointData = useEndpoint();

  const header = endpointData ? endpointData.header : null;

  return (
    <div className="container">
    <header className="headerContainer">
      <div className="headerLeft">
        <h1>INFOGRÁFICO</h1>
        <h1>SMART TODA HORA</h1>
      </div>

      <div className="headerRight">
        <h1>{header && header.period}</h1>
        <h3>
          {header && header.storeAddress}
        </h3>
      </div>
    </header>
  </div>
  )
}

export default Header