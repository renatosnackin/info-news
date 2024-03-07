import './style.css';

const Header = () => {
  const data = new Date();
  const mes = data.toLocaleDateString("pt-BR", { month: "long" });
  const ano = data.getFullYear();

  return (
    <div className="container">
    <header className="headerContainer">
      <div className="headerLeft">
        <h1>INFOGRÁFICO</h1>
        <h1>SNACKIN</h1>
      </div>

      <div className="headerRight">
        <h1>{mes}/ {ano}</h1>
        <h3>
          NIQUELANDIA - GO
        </h3>
      </div>
    </header>
  </div>
  )
}

export default Header